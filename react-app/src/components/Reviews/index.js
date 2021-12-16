import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReviews, deleteReview, addReview, updateReview } from '../../store/review'
import UpdateReviewForm from '../UpdateReview'
import { getHikes } from '../../store/hike'
import "./Reviews.css"

function Review() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const userId = sessionUser.id
    const reviews = useSelector(state => Object.values(state.review))
    const hikes = useSelector(state => Object.values(state.hike))
    console.log('@#$%@#$%@#$%', hikes)
    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    useEffect(() => {
        dispatch(getHikes())
    }, [dispatch])

    const handleDelete = (id) => {
        dispatch(deleteReview(id));
    };


    const handlePost = () => {
        dispatch(addReview({
            user_id: userId,
            hike_id: 7,
            description: 'testing POST from front end',
            rating: 4

        }));
    };


    return (
        <>
            <div className="navbarMargin">
                REVIEWS
                {reviews?.map(review => (
                    <div key={review.id}>
                        {review.user_id} -- {review.description}
                        <button onClick={() => handleDelete(review.id)}>
                            Delete Review
                        </button>
                        <UpdateReviewForm reviewId={review.id}/>
                    </div>
                    

                ))}
            </div>
            <button onClick={() => handlePost()}>Post Review</button>
            <div>
                {hikes.map(hike => (
                    <div key={hike.id}>
                        {hike.id} hike
                    </div>
                ))}
            </div>
        </>
    )
}

export default Review;

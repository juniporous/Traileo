import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReviews, deleteReview, addReview, updateReview } from '../store/review'
import UpdateReviewForm from './UpdateReview'

function Review() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const userId = sessionUser.id
    const reviews = useSelector(state => Object.values(state.review))
    useEffect(() => {
        dispatch(getReviews())
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
            <div>
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
        </>
    )
}

export default Review;

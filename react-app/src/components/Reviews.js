import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReviews, deleteReview } from '../store/review'

function Review() {
    const dispatch = useDispatch()

    const reviews = useSelector(state => Object.values(state.review))
    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    const handleDelete = (id) => {
        dispatch(deleteReview(id));
    };

    return (
            <div>
                REVIEWS
                {reviews?.map(review => (
                    <div key={review.id}>
                        {review.user_id} -- {review.description}
                        <button onClick={() => handleDelete(review.id)}>
                            Delete Review
                        </button>
                    </div>
                    

                ))}
            </div>
    )
}

export default Review;

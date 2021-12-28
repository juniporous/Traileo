import { deleteReview, updateReview, getReviews } from "../../store/review";
import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import { useState } from "react";
import UpdateReviewForm from "../UpdateReview";
import { useEffect } from "react";
import './DashboardReview.css'

const DashboardReviews = ({ reviews, userId }) => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [revId, setRevId] = useState();
    const handleDelete = (id) => {
        dispatch(deleteReview(id));
    };

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])



    return (
        <ul className='ul'>
            {reviews.map(review => ( review.user_id == userId ?
                <li className='review-list-item' key={review.id}>
                    <div className={showModal ? 'delete-button-no-modal' : 'delete-button-modal'}>
                    
                        <button  onClick={() => handleDelete(review.id)}>
                                Delete Review
                        </button>
                        <button className='edit-review-button' onClick={() => {setShowModal(true); setRevId(review.id)}}>Edit Review</button>
                        {showModal && (
                            <Modal onClose={() => setShowModal(false)}>
                                <div className='modal-box'>
                                    <UpdateReviewForm reviewId={revId} setShowModal={setShowModal} />
                
                                </div>
                            </Modal>
                        )}
                    </div>
                    <div class="card">
                        <div class="container">
                            <div>
                                Rating: {review.rating}
                            </div>
                            <div className="dashboard-desc-text">
                                {review.description}
                            </div>
                        </div>
                    </div>    
                </li>
                
                : null
            ))
            }
        </ul>
    )
}

export default DashboardReviews;
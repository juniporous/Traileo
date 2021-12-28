import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateReview } from '../../store/review';
import { deleteReview } from '../../store/review';
import './UpdateReview.css'


const UpdateReviewForm = ({ reviewId, setShowModal }) => {
  const review = useSelector(state => state.review[reviewId]);
  const dispatch = useDispatch();

  const [description, setDescription] = useState(review.description);
  const [rating, setRating] = useState(review.rating);

  const updateDescription = (e) => setDescription(e.target.value);
  const updateRating = (e) => setRating(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...review,
      description,
      rating
    };

    const updatedName = await dispatch(updateReview(payload));

    setShowModal(false);
  };

  const handleDelete = (id) => {
    setDescription('');
    setRating('');
    setShowModal(false);
    dispatch(deleteReview(id));
};

  return (
    
    <section className='edit-review-container'>
      <form className='edit-review-form' onSubmit={handleSubmit}>
      <div className='edit-hike-rating'>
      <select name='Rating' onChange={updateRating}>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        </div>
      <div className='edit-hike-review-field'>
          <textarea
            className='edit-description-text'
            placeholder="Write description here..."
            value={description}
            onChange={updateDescription}
            >
            </textarea>
        </div>
        
        <button className='edit-review-button' type="submit">
          Update Review
        </button>
        <button className='edit-review-button'  onClick={() => handleDelete(reviewId)}>
            Delete Review
        </button>
      </form>
    </section>
  
  );
};

export default UpdateReviewForm;
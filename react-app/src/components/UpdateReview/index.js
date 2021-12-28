import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateReview } from '../../store/review';
import './UpdateReview.css'


const UpdateReviewForm = ({ reviewId }) => {
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

  };

  return (
    
    <section className='edit-review-container'>
      <form className='post-review-form' onSubmit={handleSubmit}>
      <div className='hike-review-field'>
          <textarea
            className='description-text'
            placeholder="Write description here..."
            value={description}
            onChange={updateDescription}
            >
            </textarea>
        </div>
        <div className='hike-review-field'>
        <input
          type="text"
          placeholder="Rating"
          value={rating}
          onChange={updateRating} />
        </div>
        <button className='post-review-button' type="submit">
          Update Review
        </button>
      </form>
    </section>
  
  );
};

export default UpdateReviewForm;
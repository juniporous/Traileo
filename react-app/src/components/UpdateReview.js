import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateReview } from '../store/review';


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
    <>
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={updateDescription} />
        <input
          type="text"
          placeholder="Rating"
          value={rating}
          onChange={updateRating} />
        <button type="submit">
          Update Review
        </button>
      </form>
    </section>
    </>
  );
};

export default UpdateReviewForm;
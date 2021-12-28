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
  const [validationErrors, setValidationErrors] = useState([]);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateRating = (e) => setRating(e.target.value);

  const validate = () => {
    const validateErrors = [];
    if (!description) {
      validateErrors.push("Description is required!");
      return validateErrors;
    } 
    
    if (description.length < 8) {
      validateErrors.push("Please provide a longer description.");
      return validateErrors;
    } 

    if (description.length > 200) {
      validateErrors.push("Please provide a shorter description.")
      return validateErrors;
    }


  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors?.length > 0) return setValidationErrors(errors);

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
        <div className='edit-review-error-container'>
          {validationErrors.map(err => <div className='post-review-error-text'>{err}</div>)}
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
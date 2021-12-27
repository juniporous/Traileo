import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateReview } from '../../store/review';
import { addReview } from '../../store/review';
import './PostReview.css'


const PostReviewForm = ({ userId, hikeId, setShowModal }) => {
//   const review = useSelector(state => state.review[reviewId]);
  const dispatch = useDispatch();

  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(5);
  const [validationErrors, setValidationErrors] = useState([]);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateRating = (e) => setRating(e.target.value);
  

  const validate = () => {
    const validateErrors = [];
    if (!description) validateErrors.push("Description is required!");
    return validateErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);
    
    const review = await dispatch(addReview({
        user_id: userId,
        hike_id: hikeId,
        description: description,
        rating: rating
    }));

    setShowModal(false)
};

  return (
    <>
    <div>
      <form className='post-review-form'>
      <div className='signup-field'>
        <select name='Rating' onChange={updateRating}>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        </div>
        <div className='hike-review-field'>
          <textarea
            className='description-text'
            placeholder="Write description here..."
            value={description}
            onChange={updateDescription}
            >
            </textarea>
        </div>
        <div className='post-review-error-container'>
          {validationErrors.map(err => <div key={err} className='post-review-error-text'>{err}</div>)}
        </div>
        <button className='post-review-button' onClick={handleSubmit}>
          Post Review
        </button>
      </form>
    </div>
    
    </>
  );
};

export default PostReviewForm;
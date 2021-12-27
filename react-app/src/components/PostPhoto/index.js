import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto } from '../../store/photo'
import './PostPhoto.css'

const PostPhotoForm = ({ userId, hikeId, setShowModal }) => {
//   const review = useSelector(state => state.review[reviewId]);
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const updatePhoto = (e) => setPhoto(e.target.value);
  

  const validate = () => {
    const validateErrors = [];
    if (!photo) validateErrors.push("Photo url is required");
    return validateErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);
    
    const review = await dispatch(addPhoto({
        user_id: userId,
        hike_id: hikeId,
        img_url: photo
    }));

    setShowModal(false)
};

  return (
    <>
    <div>
      <form className='post-photo-form'>
        <div className='post-photo-field'>
            <input
            className='post-photo-text'
            type="text"
            name="photo url"
            placeholder="Image Url"
            value={photo}
            onChange={updatePhoto} />
        </div>
        <div className='post-photo-error-container'>
            {validationErrors.map(err => <div key={err} className='post-photo-error-text'>{err}</div>)}
        </div>
        <button className='post-photo-button' onClick={handleSubmit}>
          Post Photo
        </button>
      </form>
    </div>
    
    
    </>
  );
};

export default PostPhotoForm;
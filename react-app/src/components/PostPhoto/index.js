import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPhoto } from '../../store/photo'
import './PostPhoto.css'

const PostPhotoForm = ({ userId, hikeId, setShowModal }) => {
//   const review = useSelector(state => state.review[reviewId]);
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const updatePhoto = (e) => setPhoto(e.target.value);
  
  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // either http or https protcol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // the domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // or ip v4 address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // the port & the path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // the query
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator?
    return !!pattern.test(str);
  }

  const validate = () => {
    const validateErrors = [];
    if (!photo) {
        validateErrors.push("Photo url is required");
        return validateErrors;
    }
    if (!validURL(photo)) {
        validateErrors.push("This photo URL is not valid. Ex: http://....png")
        return validateErrors;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validate();
    if (errors?.length > 0) return setValidationErrors(errors);
    
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
            {validationErrors.map(err => <div className='post-photo-error-text'>{err}</div>)}
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
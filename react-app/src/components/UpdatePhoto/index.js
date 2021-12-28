import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePhoto, deletePhoto } from '../../store/photo';
import './UpdatePhoto.css'

const UpdatePhotoForm = ({ photoId, setShowModal }) => {
  const photo = useSelector(state => state.photo[photoId]);
  const dispatch = useDispatch();

  const [imgUrl, setImgUrl] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const updateImgUrl = (e) => setImgUrl(e.target.value);

  const handleDelete = (id) => {
    setImgUrl('')
    dispatch(deletePhoto(id));
    setShowModal(false)
 }; 

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
    if (!imgUrl) {
        validateErrors.push("Photo url is required");
        return validateErrors;
    }
    if (!validURL(imgUrl)) {
        validateErrors.push("This photo URL is not valid. Ex: http://....png")
        return validateErrors;
    }

    
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors?.length > 0) return setValidationErrors(errors);

    const payload = {
      ...photo,
      img_url: imgUrl
    };
    
    const updatedPhoto = await dispatch(updatePhoto(payload));
    setShowModal(false)

  };

  return (
    <>
    <section className='edit-photo-container'>
      <div className='edit-photo-form'>
        <form  onSubmit={handleSubmit}>
            <div className='edit-hike-photo-field'>
                <div>
                    <p className='edit-label'>
                        Enter URL
                    </p>
                </div>
                <input
                type="text"
                name="photo url"
                placeholder="Image URL"
                value={imgUrl}
                onChange={updateImgUrl} />
            </div>
            <div className='post-photo-error-container'>
                {validationErrors.map(err => <div className='post-photo-error-text'>{err}</div>)}
            </div>
            <button className='edit-photo-button' type="submit">
                Update Photo 
            </button>
        </form>
        <button className='delete-photo-button' onClick={() => handleDelete(photo.id)}>
            Delete Photo
        </button>
      </div>
      
    </section>
    </>
  );
};

export default UpdatePhotoForm;
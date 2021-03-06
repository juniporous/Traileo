import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePhoto, deletePhoto } from '../../store/photo';
import './UpdatePhoto.css'

const UpdatePhotoForm = ({ photoId, setShowModal, setImageLoading, imageLoading }) => {
  const photo = useSelector(state => state.photo[photoId]);
  
  const dispatch = useDispatch();

  const [imgUrl, setImgUrl] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  const updateImgUrl = async (e) => {
    const formData = new FormData()
    
    formData.append("img_url", e.target.files[0])
    formData.append("user_id", photo.user_id)
    formData.append("hike_id", photo.hike_id)
    formData.append("id", photo.id)
    setImageLoading(true)
    const updatedPhoto = await dispatch(updatePhoto(formData));
    setShowModal(false)
    setImageLoading(false)
  }

  

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

  return (
    <>
    <section className='edit-photo-container'>
      <div className='edit-photo-form'>
        <form>
            <div className='edit-hike-photo-field'>
                
                <div className='label-div'>
                    <label className="edit-photo-button" htmlFor="uploadPhoto">Click to update photo...</label>
                </div>
                <input
                className='post-photo-text'
                type="file"
                accept=".jpg, .jpeg, .png, .gif"
                name="photo url"
                id="uploadPhoto"
                onChange={updateImgUrl} />
            </div>
           
          <div className='loading-holder'>
            {(imageLoading) && 
          <div className='edit-loading-div'>
          <p className='loading-edit'>  Loading</p>
          <p className='one-edit'>.</p>
          <p className='two-edit'>.</p>
          <p className='three-edit'>.</p>
        </div>
        }
        </div>
        
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
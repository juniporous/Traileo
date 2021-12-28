import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePhoto, deletePhoto } from '../../store/photo';
import './UpdatePhoto.css'

const UpdatePhotoForm = ({ photoId }) => {
  const photo = useSelector(state => state.photo[photoId]);
  const dispatch = useDispatch();

  const [imgUrl, setImgUrl] = useState(photo?.img_url);

  const updateImgUrl = (e) => setImgUrl(e.target.value);

  const handleDelete = (id) => {
    setImgUrl('')
    dispatch(deletePhoto(id));
 }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...photo,
      img_url: imgUrl
    };
    console.log('!!PAYLOARD!!!!', payload)
    const updatedPhoto = await dispatch(updatePhoto(payload));

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
                placeholder="Image URL"
                value={imgUrl}
                onChange={updateImgUrl} />
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
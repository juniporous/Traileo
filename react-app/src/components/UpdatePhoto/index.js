import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePhoto, deletePhoto } from '../../store/photo';


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
      imgUrl
    };

    const updatedPhoto = await dispatch(updatePhoto(payload));

  };

  return (
    <>
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          value={imgUrl}
          onChange={updateImgUrl} />
        <button type="submit">
          Update Photo 
        </button>
      </form>
      <button onClick={() => handleDelete(photo.id)}>
        Delete Photo
      </button>
    </section>
    </>
  );
};

export default UpdatePhotoForm;
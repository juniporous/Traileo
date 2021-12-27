import { getPhotos } from "../../store/photo";
// import { deletePhoto } from "../../store/photo";
import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import { useState } from "react";
import { useEffect } from "react";
import UpdatePhotoForm from "../UpdatePhoto";
import './DashboardPhotos.css'


const DashboardPhotos = ({ userId, photos }) => {

    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [photoId, setPhotoId] = useState();
    // const handleDelete = (id) => {
    //     dispatch(deletePhoto(id));
    // };

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])


    return (
        <div className='dashboard-photo-container'>
            
            {photos.map(photo => ( photo.user_id === userId ?
                    <div className='photo-tile'>
                    <img key={photo.id} className="photo-image" src={photo.img_url} alt='No media available' onClick={() => {setShowModal(true); setPhotoId(photo.id)}}/>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <div className='modal-box'>
                                <UpdatePhotoForm photoId={photoId} setShowModal={setShowModal} />
            
                            </div>
                        </Modal>
                    )}
                    </div>
                    
                : null
                
            ))
            }
        </div>

    )
}

export default DashboardPhotos;
import { deletePhoto, getPhotos, updatePhoto } from "../../store/photo";
import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import { useState } from "react";
import UpdateReviewForm from "../UpdateReview";
import { useEffect } from "react";
import UpdatePhotoForm from "../UpdatePhoto";


const DashboardPhotos = ({ userId, photos }) => {

    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [photoId, setPhotoId] = useState();
    const handleDelete = (id) => {
        dispatch(deletePhoto(id));
    };

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])


    return (
        <div className='photo-container'>
            
            {photos.map(photo => ( photo.user_id == userId ?
                    <div className='item'>
                    <img key={photo.id} src={photo.img_url} onClick={() => {setShowModal(true); setPhotoId(photo.id)}} alt='No Image For This Spot'/>
                    <p>{photo.id}</p>
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
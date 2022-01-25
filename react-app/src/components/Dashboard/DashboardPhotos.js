import { getPhotos } from "../../store/photo";
import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import { useState } from "react";
// import UpdateReviewForm from "../UpdateReview";
import { useEffect } from "react";
import UpdatePhotoForm from "../UpdatePhoto";
import './DashboardPhotos.css'


const DashboardPhotos = ({ userId, photos }) => {

    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [imageLoading, setImageLoading] = useState(false);
    const [photoId, setPhotoId] = useState();
    // const handleDelete = (id) => {
    //     dispatch(deletePhoto(id));
    // };

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])


    return (
        <div className='dashboard-photo-container'>
            
            {photos.map(photo => ( photo.user_id === +userId ?
                    <div key={photo.id} className='photo-tile'>
                        <img className="photo-image" src={photo.img_url} onClick={() => {setShowModal(true); setPhotoId(photo.id)}} alt='No Media For This Spot'/>
                        {showModal && (
                            <Modal onClose={() => setShowModal(false)}>
                                <div className='modal-box'>
                                    <UpdatePhotoForm photoId={photoId} setShowModal={setShowModal} setImageLoading={setImageLoading} imageLoading={imageLoading}/>
                
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
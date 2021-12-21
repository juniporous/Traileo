import './HikePhotos.css'


const HikePhotos = ({ hikeId, photos }) => {
    return (
        <div className='photo-container'>
            {photos.map(photo => ( photo.hike_id == hikeId ?
                    <img className='item' key={photo.id} src={photo.img_url} alt='No Image For This Spot'/>
                : null
            ))
            }
        </div>

    )
}

export default HikePhotos;
import './HikePhotos.css'


const HikePhotos = ({ hikeId, photos }) => {
    return (
        <div>
            {photos.map(photo => ( photo.hike_id == hikeId ?
                <div key={photo.id}>
                    <div class="card">
                        <div class="container">
                        <div>
                           <img className='img' src={photo.img_url} alt='No Image For This Spot'/>
                        </div>
                        </div>
                    </div>
                </div>
                : null
            ))
            }
        </div>

    )
}

export default HikePhotos;
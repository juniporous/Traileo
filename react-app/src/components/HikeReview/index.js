import './HikeReview.css'


const HikeReview = ({ hikeId, reviews }) => {
    return (
        <div className='ul-container'>
            <ul className='ul'>
                {reviews.map(review => ( review.hike_id == hikeId ?
                    <li key={review.id} className='li-review'>
                        <div class="card">
                            <div class="container">
                                <div>
                                    Rating: {review.rating}
                                </div>
                                <div className="description-text">
                                    {review.description}
                                </div>
                            </div>
                        </div>
                    </li>
                    : null
                ))
                }
            </ul>
        </div>
    )
}

export default HikeReview;
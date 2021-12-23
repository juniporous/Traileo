import './HikeReview.css'


const HikeReview = ({ hikeId, reviews }) => {
    return (
        <ul className='ul'>
            {reviews.map(review => ( review.hike_id == hikeId ?
                <li key={review.id} className='li-review'>
                    <div class="card">
                        <div class="container">
                            <div>
                                Rating: {review.rating}
                            </div>
                            <div>
                                {review.description}
                            </div>
                        </div>
                    </div>
                </li>
                : null
            ))
            }
        </ul>
    )
}

export default HikeReview;
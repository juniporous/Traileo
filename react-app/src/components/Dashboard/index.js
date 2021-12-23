import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReviews } from '../../store/review'
import { getPhotos } from '../../store/photo'
import UpdateReviewForm from '../UpdateReview'
import { useParams } from 'react-router'
import { Modal } from '../../context/Modal'
import DashboardReviews from './DashboardReviews'
import DashboardPhotos from './DashboardPhotos'
import './Dashboard.css'


function Dashboard () {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user)
    const userId = sessionUser.id
    const reviews = useSelector(state => Object.values(state.review)).reverse()
    const photos = useSelector(state => Object.values(state.photo)).reverse()
    useEffect(() => {
        dispatch(getReviews())
        dispatch(getPhotos())
    }, [dispatch])

    return (
        <>
            <div class="dashboard-parent">
                <div class="search"> </div>
                <div class="dashboard-div2">
                    <div className='dashboard-review-text'>
                       My Reviews
                    </div>
                    
                </div>
                <div class="dashboard-reviews"> 
                    <DashboardReviews reviews={reviews} userId={userId}/>
                </div>
                <div class="dashboard-div4">
                    <div className="dashboard-photo-header">
                        <div className='photo-header-text'>
                            My Photos
                        </div>
                        <div className="dashboard-photo-border"></div>
                    </div>
                </div>
                <div class="dashboard-photos">
                <DashboardPhotos photos={photos} userId={userId}/>
                </div>
                <div class="div6"> </div>
            </div>
        </>
    )
}

export default Dashboard;
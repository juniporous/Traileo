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
            <div class="parent">
                <div class="search"> </div>
                <div class="div2">My Reviews</div>
                <div class="dashboard-reviews"> 
                    <DashboardReviews reviews={reviews} userId={userId}/>
                </div>
                <div class="div4">
                    My Photos
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
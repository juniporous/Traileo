import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReviews } from '../../store/review'
import UpdateReviewForm from '../UpdateReview'
import { useParams } from 'react-router'
import { Modal } from '../../context/Modal'
import DashboardReviews from './DashboardReviews'
import './Dashboard.css'


function Dashboard () {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user)
    const userId = sessionUser.id
    const reviews = useSelector(state => Object.values(state.review)).reverse()

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    return (
        <>
            <div class="parent">
                <div class="search"> </div>
                <div class="div2">My Reviews</div>
                <div class="dashboard-reviews"> 
                    <DashboardReviews reviews={reviews} userId={userId}/>
                </div>
                <div class="div4">My Photos</div>
                <div class="div5"></div>
                <div class="div6"> </div>
            </div>
        </>
    )
}

export default Dashboard;
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReviews, deleteReview, addReview } from '../../store/review'
import UpdateReviewForm from '../UpdateReview'
import SearchBar from '../SearchBar'
import { getHikes, searchHikes, getHikesForDisplay } from '../../store/hike'
import { getPhotos } from '../../store/photo'
import PostReviewForm from '../PostReview'
import { useHistory, useParams } from 'react-router'
import { Modal } from '../../context/Modal'
import HikeReview from '../HikeReview'
import HikePhotos from '../HikePhotos'
import './hike.css'

function Hike() {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [showReviews, setShowReviews] = useState(true)
    const sessionUser = useSelector((state) => state.session.user)
    const userId = sessionUser.id
    const history = useHistory();
    const reviews = useSelector(state => Object.values(state.review)).reverse()
    const photos = useSelector(state => Object.values(state.photo))
    const { hikeId } = useParams()
    
    const [search, setSearch] = useState('')
    const hikeResult = useSelector(state => Object.values(state.hike))
    const hike = hikeResult[hikeId-1] ? hikeResult[hikeId-1] : {}
    
    // useEffect(() => {
    //     setShowReviews(false)
    // }, [])

    useEffect(() => {
        dispatch(getHikesForDisplay())
    }, [dispatch])


    useEffect(()=>{
        dispatch(searchHikes(search))
    }, [dispatch, search])

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])


    useEffect(() => {
        dispatch(getHikes())
    }, [dispatch])

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])


    const seeReviews = () => setShowReviews(true)
    const seePhotos = () => setShowReviews(false)
    
    return (
        <>
          <div class="parent">
            <div class="container1">{hike.difficulty}</div>
            <div class="div2">Distance: {hike.length} miles Trip Length: {hike.eta} hours</div>
            <div class="div3">
                <button onClick={seeReviews}>Reviews</button>
                <div>|</div>
                <button onClick={seePhotos}>Photos</button>
            </div>
            <div class="div4">
                {sessionUser ? 
                    <div className='review-button-container'>
                        {/* line 77 for if showModal == true */}
                        <button onClick={() => setShowModal(true)}>Post A Review</button>
                    </div>
                    : null
                }

                {showReviews ? <HikeReview reviews={reviews} hikeId={hikeId}/> : <HikePhotos hikeId={hikeId} photos={photos}/>}
            </div>
            <div class="div5"> </div>
            <div class="div6"> </div>
          </div>


          {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <div className='modal-box'>
                            <PostReviewForm userId={userId} hikeId={hikeId} setShowModal={setShowModal} />
                        </div>
                    </Modal>
                )}
        </>
    )
}

export default Hike;
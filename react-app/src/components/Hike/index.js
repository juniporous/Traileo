import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReviews, deleteReview, addReview } from '../../store/review'
import UpdateReviewForm from '../UpdateReview'
import SearchBar from '../SearchBar'
import { getHikes, searchHikes, getHikesForDisplay } from '../../store/hike'
import { getPhotos } from '../../store/photo'
import PostReviewForm from '../PostReview'
import PostPhotoForm from '../PostPhoto'
import { useHistory, useParams } from 'react-router'
import { Modal } from '../../context/Modal'
import HikeReview from '../HikeReview'
import HikePhotos from '../HikePhotos'
import AllHikesMap from '../Maps'
import './hike.css'

function Hike() {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [showReviews, setShowReviews] = useState(true)
    const sessionUser = useSelector((state) => state.session.user)
    const userId = sessionUser?.id
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
          <div className="hike-parent">
            <div className="hike-container1">
                <div>
                    <div className='hike-difficulty'>
                    {hike.difficulty}
                    </div>
                    
                </div>
            </div>
            <div className="hike-div2">
                <div>
                  Distance: {hike.length} miles
                </div>
                <div>
                  Trip Length: {hike.eta} hours
                </div>
            </div>
            <div className="hike-div3">
                <button className='hike-toggle-button' onClick={seeReviews}>Reviews</button>
                <div className='hike-toggle-divider'>|</div>
                <button className='hike-toggle-button' onClick={seePhotos}>Photos</button>
            </div>
            <div className="hike-div4">
                {sessionUser && showReviews ? 
                    <div className='review-button-container'>
                        <button className={showModal ? 'hike-post-button-modal' : 'hike-post-button-no-modal'} onClick={() => setShowModal(true)}>Post A Review</button>
                    </div>
                : sessionUser && !showReviews ?
                    <div className='review-button-container'>
                        <button className={showModal ? 'hike-post-button-modal' : 'hike-post-button-no-modal'} onClick={() => setShowModal(true)}>Post A Photo</button>
                    </div> 
                : null
                }

                {showReviews ? <HikeReview reviews={reviews} hikeId={hikeId}/> : <HikePhotos hikeId={hikeId} photos={photos}/>}
            </div>
            <div className="hike-div5">
                <AllHikesMap hikes={hikeResult} hike={hike}/>
            </div>
            <div className="hike-div6">
              
            </div>
          </div>


          {showModal && showReviews && (
            <Modal onClose={() => setShowModal(false)}>
                <div className='modal-box'>
                    <PostReviewForm userId={userId} hikeId={hikeId} setShowModal={setShowModal} />
                </div>
            </Modal>
          )}

          {showModal && !showReviews && (
            <Modal onClose={() => setShowModal(false)}>
                <div className='modal-box'>
                    <PostPhotoForm userId={userId} hikeId={hikeId} setShowModal={setShowModal} />
                </div>
            </Modal>
          )}
        </>
    )
}

export default Hike;
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReviews, deleteReview, addReview } from '../../store/review'
import UpdateReviewForm from '../UpdateReview'
import SearchBar from '../SearchBar'
import { getHikes, searchHikes, getHikesForDisplay } from '../../store/hike'
import PostReviewForm from '../PostReview'
import { useHistory, useParams } from 'react-router'
import { Modal } from '../../context/Modal'
import HikeReview from '../HikeReview'
import './hike.css'

function Hike() {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user)
    const userId = sessionUser.id
    const history = useHistory();
    const reviews = useSelector(state => Object.values(state.review))
    const { hikeId } = useParams()


    
    const [search, setSearch] = useState('')
    const hikeResult = useSelector(state => Object.values(state.hike))
    const hike = hikeResult[hikeId-1] ? hikeResult[hikeId-1] : {}
    console.log('@#$%@$%', hike)
    useEffect(() => {
        dispatch(getHikesForDisplay())
    }, [dispatch])


    useEffect(()=>{
        dispatch(searchHikes(search))
    }, [dispatch, search])

    
    

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    // to display hikes
    const hikes = useSelector(state => Object.values(state.hike))
    
    useEffect(() => {
        dispatch(getHikes())
    }, [dispatch])



    const handlePost = () => {
        dispatch(addReview({
            user_id: userId,
            hike_id: hike.id,
            description: 'testing POST from front end',
            rating: 4

        }));
    };


    return (
        <>
          <div class="parent">
            <div class="container1">{hike.difficulty}</div>
            <div class="div2">Distance: {hike.length} miles Trip Length: {hike.eta} hours</div>
            <div class="div3">

            </div>
            <div class="div4">
                {sessionUser ? 
                    <div className='review-button-container'>
                        <button onClick={() => setShowModal(true)}>Post A Review</button>
                    </div>
                    : null
                }
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <div className='modal-box'>
                            <PostReviewForm userId={userId} hikeId={hikeId} setShowModal={setShowModal} />
                        </div>
                    </Modal>
                )}
                <HikeReview reviews={reviews} hikeId={hikeId}/>
            </div>
            <div class="div5"> </div>
            <div class="div6"> </div>
          </div>
        </>
    )
}

export default Hike;
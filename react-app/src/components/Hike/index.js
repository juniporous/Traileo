import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReviews, deleteReview, addReview } from '../../store/review'
import UpdateReviewForm from '../UpdateReview'
import SearchBar from '../SearchBar'
import { getHikes, searchHikes } from '../../store/hike'
import { useHistory, useParams } from 'react-router'
import './hike.css'

function Hike() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const userId = sessionUser.id
    const history = useHistory();
    const reviews = useSelector(state => Object.values(state.review))

    const [search, setSearch] = useState('')
    const hikeResult = useSelector(state => Object.values(state.hike))
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
            hike_id: 7,
            description: 'testing POST from front end',
            rating: 4

        }));
    };


    return (
        <>
          <div class="parent">
            <div class="div1"> </div>
            <div class="div2"> </div>
            <div class="div3"> </div>
            <div class="div4"> </div>
          </div>
        </>
    )
}

export default Hike;
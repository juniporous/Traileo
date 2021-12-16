import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReviews, deleteReview, addReview, updateReview } from '../../store/review'
import UpdateReviewForm from '../UpdateReview'
import { getHikes, searchHikes } from '../../store/hike'
import "./Reviews.css"

function Review() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const userId = sessionUser.id
    const reviews = useSelector(state => Object.values(state.review))
    

    const [search, setSearch] = useState('')
    const hikeResult = useSelector(state => Object.values(state.hike))
    useEffect(()=>{
        dispatch(searchHikes(search))
    }, [dispatch, search])
    console.log('######', hikeResult)


    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    // to display hikes
    // const hikes = useSelector(state => Object.values(state.hike))
    // useEffect(() => {
    //     dispatch(getHikes())
    // }, [dispatch])

    const handleDelete = (id) => {
        dispatch(deleteReview(id));
    };


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
            <div className="navbarMargin">
                REVIEWS
                {reviews?.map(review => (
                    <div key={review.id}>
                        {review.user_id} -- {review.description}
                        <button onClick={() => handleDelete(review.id)}>
                            Delete Review
                        </button>
                        <UpdateReviewForm reviewId={review.id}/>
                    </div>
                    

                ))}
            </div>
            <button onClick={() => handlePost()}>Post Review</button>
            {/* <div>
                {hikes.map(hike => (
                    <div key={hike.id}>
                        {hike.id} hike
                    </div>
                ))}
            </div> */}
            <form>
          <div className="SearchContainer">
            <div className="pageTitle">
              <div>Search</div>
            </div>
            <input
              className="subTitleSearch"
              type="text"
              value={search}
              placeholder="Find a song or artist..."
              onChange={(e) => setSearch(e.target.value)}
            />{" "}
            <span
              className={search.length == 0 ? "hideText" : "subTitleSearch1"}
            >
              
            </span>
          </div>
        </form>
        </>
    )
}

export default Review;
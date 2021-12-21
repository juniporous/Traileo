import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPhotos, deletePhoto, addPhoto, updateReview } from '../../store/photo'
import UpdateReviewForm from '../UpdateReview'
import SearchBar from '../SearchBar'
import { getHikes, searchHikes } from '../../store/hike'
import "./Reviews.css"

function Review() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const userId = sessionUser.id
    const photos = useSelector(state => Object.values(state.photo))
    

    const [search, setSearch] = useState('')
    const hikeResult = useSelector(state => Object.values(state.hike))
    useEffect(()=>{
        dispatch(searchHikes(search))
    }, [dispatch, search])
    console.log('######', hikeResult)


    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    // to display hikes
    const hikes = useSelector(state => Object.values(state.hike))
    useEffect(() => {
        dispatch(getHikes())
    }, [dispatch])

    const handleDelete = (id) => {
        dispatch(deletePhoto(id));
    };


    const handlePost = () => {
        dispatch(addPhoto({
            user_id: userId,
            hike_id: 7,
            img_url: 'https://res.cloudinary.com/dfy0z2yzj/image/upload/v1639529160/Traileo/echo1_sgy0vj.png'
        }));
    };


    return (
        <>
            <div className="navbarMargin">
                PHOTOS
                {photos?.map(photo => (
                    <div key={photo.id}>
                        PhotoUserId {photo.user_id} -- {photo.img_url}
                        <button onClick={() => handleDelete(photo.id)}>
                            Delete Photo
                        </button>
                        {/* <UpdateReviewForm reviewId={rev.id}/> */}
                    </div>
                    

                ))}
            </div>
            <button onClick={() => handlePost()}>Post Photo</button>
            <SearchBar/>
        </>
    )
}

export default Review;

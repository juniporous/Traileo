const GET_REVIEWS = 'playlists/GET_REVIEWS'


// Action Creators

const showReviews = (data) => {
    return {
      type: GET_REVIEWS,
      data
    }
  }




// Thunk Creators

export const getReviews = () => async dispatch => {
    const reviews = await fetch('/api/reviews/')
    const data = await reviews.json()
    dispatch(showReviews(data))
  }



const initialState = {};
  // Define reducer
export default function reducer(state = initialState, action) {
let newState = {};
switch (action.type) {
    case GET_REVIEWS:
      newState = {...state};
      action.data.playlists.forEach(review => newState[review.id] = review)
      return newState;
    default:
      return state;
    }
  }
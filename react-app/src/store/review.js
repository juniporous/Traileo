const GET_REVIEWS = 'reviews/GET_REVIEWS'
const REMOVE_ONE_REVIEW = 'reviews/REMOVE_ONE_REVIEW';

// Action Creators

const showReviews = (data) => {
    return {
      type: GET_REVIEWS,
      data
    }
  }

  const removeOneReview = id => {
    return {
        type: REMOVE_ONE_REVIEW,
        payload: id
    };
};
  

// Thunk Creators

export const getReviews = () => async dispatch => {
    const response = await fetch('/api/reviews/')
    if (response.ok) {
        const data = await response.json();
        dispatch(showReviews(data));
      }
  }

export const deleteReview = id => async dispatch => {
    const response = await fetch(`/api/reviews/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
    dispatch(removeOneReview(id));
    }
};



const initialState = {};
  // Define reducer
export default function reducer(state = initialState, action) {
let newState = {};
switch (action.type) {
    case GET_REVIEWS:
      newState = {...state};
      action.data.reviews.forEach(review => newState[review.id] = review)
      return newState;
    case REMOVE_ONE_REVIEW:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
    }
  }
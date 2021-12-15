const GET_REVIEWS = 'reviews/GET_REVIEWS'
const REMOVE_ONE_REVIEW = 'reviews/REMOVE_ONE_REVIEW';
const ADD_ONE_REVIEW = 'reviews/ADD_ONE_REVIEW'
const UPDATE_ONE_REVIEW = 'reviews/UPDATE_ONE_REVIEW'
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

const addOneReview = payload => {
    return {
        type: ADD_ONE_REVIEW,
        payload
    }
}

const updateOneReview = payload => ({
    type: UPDATE_ONE_REVIEW,
    payload
})
  

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

export const addReview = review => async dispatch => {
    const response = await fetch('/api/reviews/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(addOneReview(data));
    }
};


export const updateReview = data => async (dispatch) => {
    const response = await fetch(`/api/reviews/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });


    if (response.ok) {
      const review = await response.json();
      dispatch(updateOneReview(review));
      return review;
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
    case ADD_ONE_REVIEW:
      newState = { ...state, [action.payload.id]: action.payload};
      return newState;
    case UPDATE_ONE_REVIEW:
      newState = { ...state, [action.payload.id]: action.payload }
      return newState;
    default:
      return state;
    }
  }
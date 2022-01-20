const GET_PHOTOS = 'photos/GET_PHOTOS'
const REMOVE_ONE_PHOTO = 'photos/REMOVE_ONE_PHOTO';
const ADD_ONE_PHOTO = 'photos/ADD_ONE_PHOTO'
const UPDATE_ONE_PHOTO = 'photos/UPDATE_ONE_PHOTO'
// Action Creators

const showPhotos = (data) => {
    return {
      type: GET_PHOTOS,
      data
    }
  }

  const removeOnePhoto = id => {
    return {
        type: REMOVE_ONE_PHOTO,
        payload: id
    };
};

const addOnePhoto = payload => {
    return {
        type: ADD_ONE_PHOTO,
        payload
    }
}

const updateOnePhoto = payload => ({
    type: UPDATE_ONE_PHOTO,
    payload
})
  

// Thunk Creators

export const getPhotos = () => async dispatch => {
    const response = await fetch('/api/photos/')
    if (response.ok) {
        const data = await response.json();
        dispatch(showPhotos(data));
      }
  }

export const deletePhoto = id => async dispatch => {
    const response = await fetch(`/api/photos/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
    dispatch(removeOnePhoto(id));
    }
};

export const addPhoto = photo => async dispatch => {
    const response = await fetch('/api/photos/', {
        method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        body: photo,
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(addOnePhoto(data));
    }
};


export const updatePhoto = data => async (dispatch) => {
    const response = await fetch(`/api/photos/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });


    if (response.ok) {
      const photo = await response.json();
      dispatch(updateOnePhoto(photo));
      return photo;
    }
  };




const initialState = {};
  // Define reducer
export default function reducer(state = initialState, action) {
let newState = {};
switch (action.type) {
    case GET_PHOTOS:
      newState = {...state};
      action.data.photos.forEach(photo => newState[photo.id] = photo)
      return newState;
    case REMOVE_ONE_PHOTO:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    case ADD_ONE_PHOTO:
      newState = { ...state, [action.payload.id]: action.payload};
      return newState;
    case UPDATE_ONE_PHOTO:
      newState = { ...state, [action.payload.id]: action.payload }
      return newState;
    default:
      return state;
    }
  }
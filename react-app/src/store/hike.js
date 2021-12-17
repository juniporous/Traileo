const GET_HIKES = 'hikes/GET_HIKES'
const GET_HIKES_FOR_DISPLAY = 'hikes/GET_HIKES_FOR_DISPLAY'

const showHikes = (data) => {
  return {
    type: GET_HIKES,
    data
  }
}

const showHikesForDisplay = (data) => {
  return {
    type: GET_HIKES_FOR_DISPLAY,
    data
  }
}

export const getHikes = () => async dispatch => {
  const response = await fetch('/api/hikes/')
    const data = await response.json();
    dispatch(showHikes(data));
    
}

export const getHikesForDisplay = () => async dispatch => {
  const response = await fetch('/api/hikes/')
    const data = await response.json();
    dispatch(showHikesForDisplay(data));
    
}

export const searchHikes = (searchParam) => async dispatch => {
  const response = await fetch('/api/hikes/search', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(searchParam)
  })
  const data = await response.json();
  dispatch(showHikes(data))
}

const initialState = {};
export default function reducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case GET_HIKES:
      newState = {};
      action.data.hikes.forEach(hike => newState[hike.id] = hike)
      return newState;
    case GET_HIKES_FOR_DISPLAY:
      newState = {...state};
      action.data.hikes.forEach(hike => newState[hike.id] = hike)
      return newState;
    default:
      return state;
  }
}
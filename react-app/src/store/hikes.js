const GET_HIKES = 'hikes/GET_HIKES'

const showHikes = (data) => {
  return {
    type: GET_HIKES,
    data
  }
}

export const getHikes = () => async dispatch => {
  const hikes = await fetch('/api/hikes/')
  const data = await hikes.json()
  dispatch(showHikes(data))
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

export default function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case GET_HIKES:
      newState = {};
      action.data.hikes.forEach(hike => newState[hike.id] = hike)
      return newState;
    default:
      return state;
  }
}
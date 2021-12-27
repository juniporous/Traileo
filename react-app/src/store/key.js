const GET_KEY = 'keys/GET_KEY'

const showKey = (data) => {
    return {
      type: GET_KEY,
      data
    }
  }

  export const getKey = () => async dispatch => {
    const response = await fetch('/api/key/')
  
    if (response.ok) {
        const data = await response.json();
        dispatch(showKey(data));
    }   
  };



  const initialState = {};
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_KEY:
        return {'key': action.data};
      default:
        return state;
    }
  }
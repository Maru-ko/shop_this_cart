const { default: axios } = require("axios");
const { useReducer, useEffect } = require("react");

const initialState = {
  data: "",
  isLoading: false,
  isError: false
}

const dispatchEvent = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT": 
      return {
        ...initialState,
        isLoading: true
      }
    case "FETCH_ERROR":
      return {
        ...initialState,
        isError: true
      }
    case "FETCH_SUCCESS":
      return {
        ...initialState,
        data: action.payload
      }
    default:
      return state;
  }
}
const useAsync = (method, url) => {
  const [state, dispatch] = useReducer(dispatchEvent, initialState);

  useEffect(() => {
    if (!url) {
      return;
    }

    const fetchData = async() => {
      dispatch({type: "FETCH_INIT"});
      switch (method) {
        case "GET":
          axios.get(url).then(response => {
            console.log({data: response.data});
            dispatch({type: "FETCH_SUCCESS", payload: response.data});
          }).catch(e => {
            console.error(e.message);
            dispatch({type: "FETCH_ERROR"});
          })
      }
    }
    fetchData();
  }, [url]);
  return state;
}

module.exports = useAsync;
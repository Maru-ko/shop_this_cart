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
        ...state,
        isLoading: true
      }
    case "FETCH_ERROR":
      return {
        ...state,
        isError: true
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload
      }
  }
}
const useAsync = (method, url) => {
  const [state, dispatch] = useReducer(initialState, dispatchEvent);

  useEffect(() => {
    if (!url) {
      return;
    }

    const fetchData = async() => {
      dispatch(initialState, {type: "FETCH_INIT"});
      switch (method) {
        case "GET":
          const response = await axios.get(url);
          response.then(response => {
            console.log(response.data);
            dispatch(initialState, {type: "FETCH_SUCCESS", payload: response.data});
          }).catch(e => {
            console.error(e.message);
            dispatch(initialState, {type: "FETCH_ERROR"});
          })
      }
    }
    fetchData();
  }, [url]);
}
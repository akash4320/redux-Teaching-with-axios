const initialState = {
    username: "",
    city: "",
    state: "Arunachal Pradesh",
    zipcode: "",
    password: "",
  };
  
  const reducer = (state = initialState, action) => {
    if (action.type === "USERNAME") {
      return {
        ...state,
        username: action.payload,
      };
    }
    if (action.type === "CITY") {
      return {
        ...state,
        city: action.payload,
      };
    }
    if (action.type === "STATE") {
      return {
        ...state,
        state: action.payload,
      };
    }
    if (action.type === "ZIPCODE") {
      return {
        ...state,
        zipcode: action.payload,
      };
    }
    if (action.type === "PASSWORD") {
      return {
        ...state,
        password: action.payload,
      };
    }
    return state;
  };
  
  export default reducer;
  
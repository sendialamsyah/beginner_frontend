const initialState = {
  user: {
    fullname: "",
    email: "",
    role: "",
  },
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_lOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "USER_REGISTER_PENDING":
        return {
            ...state,
        isLoading: true,
        };
    case "USER_REGISTER_SUCCESS":
        return {
            ...state,
        user: action.payload,
        isLoading: false,
        }
    default:
      return state;
  }
};

export default userReducer;

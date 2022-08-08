const initialState = {
    product: {
      name: "",
      description: "",
      price: "",
      stock: ""
    },
    isLoading: false,
  };

  const sellingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INSERT_PRODUCT_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "INSERT_PRODUCT_SUCCESS":
        return {
          ...state,
          product: action.payload,
          isLoading: false,
        };
    default:
        return state
    }
  }

  export default sellingReducer
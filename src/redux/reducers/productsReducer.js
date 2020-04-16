const INITIAL_STATE = {
  sidebarToggle: false,
  cartToggle: false,
  itemCount: 0,
  cart: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HANDLE_SIDE_BAR_TOGGLE_ACTION":
      return { ...state, sidebarToggle: !state.sidebarToggle };
    case "SIDE_BAR_TOGGLE_ACTION":
      return { ...state, sidebarToggle: false, cartToggle: false };
    case "HANDLE_CART_TOGGLE_ACTION":
      return { ...state, cartToggle: !state.cartToggle };
    default:
      return state;
  }
};

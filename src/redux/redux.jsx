// import { createStore } from "redux";

// const initialState = {
//   cart: [],
//   language: "en",
//   theme: "light",
// };

// const ADD_TO_CART = "ADD_TO_CART";
// const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// const SET_LANGUAGE = "SET_LANGUAGE";
// const SET_THEME = "SET_THEME";

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return { ...state, cart: [...state.cart, action.payload] };
//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item.id !== action.payload),
//       };
//     case SET_LANGUAGE:
//       return { ...state, language: action.payload };
//     case SET_THEME:
//       return { ...state, theme: action.payload };
//     default:
//       return state;
//   }
// };

// const redux = createStore(rootReducer);

// export default redux;
import { createStore } from "redux";

const initialState = {
  cart: [],
  language: "uz",
  theme: "light",
};

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const SET_LANGUAGE = "SET_LANGUAGE";
const SET_THEME = "SET_THEME";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

const redux = createStore(rootReducer);

export default redux;

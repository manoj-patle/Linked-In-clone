// import { createStore, applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";
// import rootReducer from "../reducer";

// const store = createStore(rootReducer, applyMiddleware(reduxThunk));

// export default store;

// import { legacy_createStore, applyMiddleware } from 'redux';

// import rootReducer from './redux/reducer';

// const store = legacy_createStore(rootReducer, {});

// export default store;
// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {},
// });
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../actions/actions";

const store = configureStore({
  reducer: {
    currentUser: userSlice,
  },
});

export default store;

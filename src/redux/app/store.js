import { createStore } from "redux";
import rootReducer from "../reducer";

const store = createStore(rootReducer);

export default store;

// import { legacy_createStore, applyMiddleware } from 'redux';

// import rootReducer from './redux/reducer';

// const store = legacy_createStore(rootReducer, {});

// export default store;

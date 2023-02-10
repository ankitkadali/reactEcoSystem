import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { todos, isLoading } from "./todos/reducers";

const reducers = { // we must hook up all the reducers to the store using line 18, 19, 23
  todos,
  isLoading
};
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  legacy_createStore(
    persistedReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // this is for redux devTools extension
    composeWithDevTools(applyMiddleware(thunk)) // this is for thunk
  );

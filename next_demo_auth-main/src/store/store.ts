import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAction, userReducer } from "./user.slice";

const rootReducer = combineReducers({
    user: userReducer
});

export type StoreType = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer
})

store.dispatch(userAction.getUserData());

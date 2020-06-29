import {
  createReducer,
  configureStore,
  createAction,
  combineReducers,
} from "@reduxjs/toolkit";
import systemReducer, { SystemState } from "./reducer/system";
import themeReducer from "./reducer/system";

export interface RootState {
  system: SystemState;
}

const rootReducer = combineReducers({
  system: systemReducer,
  //theme: themeReducer,
});

export const store = configureStore<RootState>({
  devTools: true,
  reducer: rootReducer,
});

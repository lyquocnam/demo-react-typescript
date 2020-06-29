import { createAction, createReducer } from "@reduxjs/toolkit";
import { User } from "../../models/user";

export interface SystemState {
  count: number;
  user: User | null;
}

const initialState: SystemState = {
  count: 0,
  user: null,
};

export const Increment = createAction("INCREMENT");

const reducer = createReducer(initialState, {
  [Increment.type]: (state) =>
    Object.assign({}, state, {
      count: state.count + 1,
    }),
});

export default reducer;

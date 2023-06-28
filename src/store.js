/**
 * 1. declaring state
 * 2. declaring action
 * 3. creating reducer
 * 4. storing data on store
*/

import { createStore } from "redux";
import counterReducer from "./reduxServices/reducers/counterReducer";

export const store = createStore(counterReducer)

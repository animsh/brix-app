import { createStore } from "redux";
import { formsReducer } from "../reducers/formReducer";

export const store = createStore(formsReducer);

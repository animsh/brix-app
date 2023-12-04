import {
  FormsState,
  FormActionTypes,
  UPDATE_NAME,
  UPDATE_EMAIL,
  UPDATE_PHONE,
  UPDATE_COMPANY,
  UPDATE_SERVICE_TYPE,
  UPDATE_BUDGET,
} from "../actions/actionTypes";

const initialState: FormsState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  serviceType: "",
  budget: "",
};

export function formsReducer(
  state = initialState,
  action: FormActionTypes
): FormsState {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case UPDATE_PHONE:
      return { ...state, phone: action.payload };
    case UPDATE_COMPANY:
      return { ...state, company: action.payload };
    case UPDATE_SERVICE_TYPE:
      return { ...state, serviceType: action.payload };
    case UPDATE_BUDGET:
      return { ...state, budget: action.payload };
    default:
      return state;
  }
}

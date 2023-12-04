export interface FormsState {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  budget: string;
}

// Action types
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_PHONE = "UPDATE_PHONE";
export const UPDATE_COMPANY = "UPDATE_COMPANY";
export const UPDATE_SERVICE_TYPE = "UPDATE_SERVICE_TYPE";
export const UPDATE_BUDGET = "UPDATE_BUDGET";

// Action interfaces
interface UpdateNameAction {
  type: typeof UPDATE_NAME;
  payload: string;
}

interface UpdateEmailAction {
  type: typeof UPDATE_EMAIL;
  payload: string;
}

interface UpdatePhoneAction {
  type: typeof UPDATE_PHONE;
  payload: string;
}

interface UpdateCompanyAction {
  type: typeof UPDATE_COMPANY;
  payload: string;
}

interface UpdateServiceTypeAction {
  type: typeof UPDATE_SERVICE_TYPE;
  payload: string;
}

interface UpdateBudgetAction {
  type: typeof UPDATE_BUDGET;
  payload: string;
}

// Combined action type
export type FormActionTypes =
  | UpdateNameAction
  | UpdateEmailAction
  | UpdatePhoneAction
  | UpdateCompanyAction
  | UpdateServiceTypeAction
  | UpdateBudgetAction;

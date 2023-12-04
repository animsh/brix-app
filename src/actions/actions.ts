import {
  UPDATE_NAME,
  UPDATE_EMAIL,
  FormActionTypes,
  UPDATE_PHONE,
  UPDATE_COMPANY,
  UPDATE_SERVICE_TYPE,
  UPDATE_BUDGET,
} from "./actionTypes";

export function updateName(name: string): FormActionTypes {
  return {
    type: UPDATE_NAME,
    payload: name,
  };
}

export function updateEmail(email: string): FormActionTypes {
  return {
    type: UPDATE_EMAIL,
    payload: email,
  };
}

export function updatePhone(phone: string): FormActionTypes {
  return {
    type: UPDATE_PHONE,
    payload: phone,
  };
}

export function updateCompany(company: string): FormActionTypes {
  return {
    type: UPDATE_COMPANY,
    payload: company,
  };
}

export function updateServiceType(serviceType: string): FormActionTypes {
  return {
    type: UPDATE_SERVICE_TYPE,
    payload: serviceType,
  };
}

export function updateBudget(budget: string): FormActionTypes {
  return {
    type: UPDATE_BUDGET,
    payload: budget,
  };
}

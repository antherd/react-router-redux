import { createAction } from 'redux-actions';

export const deletePlan = createAction("DELETE_PLAN", index => index);
export const addPlan = createAction("ADD_PLAN", item => item);

import * as actionTypes from "./actionTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const add_5 = () => {
  return {
    type: actionTypes.ADD_5,
    value: 5,
  };
};

export const sub_5 = () => {
  return {
    type: actionTypes.SUB_5,
    value: 5,
  };
};

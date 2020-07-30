export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_5 = "ADD_5";
export const SUB_5 = "SUB_5";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const add_5 = () => {
  return {
    type: ADD_5,
    value: 5,
  };
};

export const sub_5 = () => {
  return {
    type: SUB_5,
    value: 5,
  };
};

export const storeResult = (result) => {
  return {
    type: STORE_RESULT,
    result: result,
  };
};

export const deleteResult = (id) => {
  return {
    type: DELETE_RESULT,
    resultelId: id,
  };
};

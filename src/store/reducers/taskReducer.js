/* eslint-disable default-param-last */
import { ADD_TASK /* REMOVE_TASK, UPDATE_TASK */ } from '../actions';

const INITIAL_STATE = {
  list: [],
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return { ...state, list: [...state.list, action.payload] };
    }
    default: {
      return state;
    }
  }
};

export default taskReducer;

/* eslint-disable default-param-last */
import { ADD_TASK } from '../actions';
import { EDIT_TASK } from '../actions/taskActions';

const INITIAL_STATE = {
  list: [],
};

const editTask = ({ list }, { payLoad }) => {
  console.log(payLoad);
  const taskToEdit = list.find((element) => element.id == idDrop);
  console.log(taskToEdit);
  taskToEdit.id = payLoad.idDrop;
  taskToEdit.task = payLoad.inputValue;
  list.filter((element));
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return { ...state, list: [...state.list, action.payload] };
    }
    case EDIT_TASK: return { tasks: () => editTask(state, action) };

    default: {
      return state;
    }
  }
};

export default taskReducer;

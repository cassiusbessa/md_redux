export const ADD_TASK = 'ADD_TASK';

export const REMOVE_TASK = 'REMOVE_TASK';

export const UPDATE_TASK = 'UPDATE_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: { id: Math.random() * 1000, task },
});

export const removeTask = (id) => ({ type: REMOVE_TASK, payload: id });

export const updateTask = (id, task) => ({ type: UPDATE_TASK, payload: { id, task } });

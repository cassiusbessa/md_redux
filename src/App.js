/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTask } from './store/actions';
import TaskList from './components/TaskList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = (e, task) => {
    e.preventDefault();
    const { addTaskStore } = this.props;
    addTaskStore(task);
    this.setState({ task: '' });
  };

  render() {
    const { task } = this.state;
    return (
      <>
        <form>
          <label htmlFor="task">
            <input
              id="task"
              name="task"
              type="text"
              value={task}
              onChange={this.handleChange}
            />
          </label>

          <button
            type="submit"
            onClick={(e) => this.handleClick(e, task)}
          >
            Salvar
          </button>
        </form>
        <TaskList />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTaskStore: (task) => dispatch(addTask(task)),
});

App.propTypes = {
  addTaskStore: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);

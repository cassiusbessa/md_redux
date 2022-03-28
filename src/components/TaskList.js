/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { edit } from '../store/actions/taskActions';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idDrop: '',
      inputValue: '',
    };
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  editClick = (state) => {
    console.log('chamei');
    const { editTask } = this.props;
    editTask(state);
  };

  render() {
    const { tasks } = this.props;

    return (
      <div>
        <ol>
          {
            tasks.map((element) => (
              <div>
                <li key={element.id}>
                  {element.task}
                  {' '}
                </li>
                <p>{element.id}</p>
              </div>

            ))
            }
        </ol>
        <button type="button" onClick={() => this.editClick(this.state)}>Edit</button>
        <select onChange={this.handleChange} name="idDrop">
          <option>Select Id</option>
          {tasks.map((element) => (
            <option value={element.id}>{element.id}</option>
          ))}
        </select>
        <input onChange={this.handleChange} name="inputValue" type="text" />
      </div>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string,
  })).isRequired,
};

// TaskList.defaultProps = {
//   tasks: [],
// };

const mapStateToProps = (state) => ({ tasks: state.tasks.list });

const mapDispatchToProps = (dispatch) => ({
  editTask: (state) => dispatch(edit(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

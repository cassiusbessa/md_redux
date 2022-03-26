/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TaskList extends React.Component {
  render() {
    const { tasks } = this.props;
    return (
      <ol>
        {tasks?.map((element) => (
          <li key={element.id}>{element.task}</li>
        ))}
      </ol>
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

export default connect(mapStateToProps, null)(TaskList);

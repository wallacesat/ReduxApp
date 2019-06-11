import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const TodoList = ({ todos, addTodos }) => (
  <Fragment>
    <ul>
      {todos.map((todo, id) => (
        <li key={id}>{todo.text}</li>
      ))}
    </ul>
    <button
      onClick={() => addTodos('Entrar dentro, porque não entra pra fora')}
    >
      Adicionar
    </button>
  </Fragment>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch({ type: 'ADD_TODO', payload: { text } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

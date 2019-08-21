import React, { Fragment } from "react";
import { connect } from "react-redux";

const Connected = ({ todo = [] }) => {
    console.log(todo);
  return (
    <Fragment>
      {todo.map(t => (
        <div key={t.id}>{t.name}</div>
      ))}
    </Fragment>
  );
};

const mapStateToProps = state => {
    console.log('state', state);
    return {todo: state.todoReducer};
};

export const ConnectedApp = connect(mapStateToProps)(Connected);

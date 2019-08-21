import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  Fragment
} from "react";
import { todoReducer } from "./reducer";
import { Todo } from "./todo";
import { ConnectedApp } from "./connected";

import "./style.scss";

export const App = () => {
  const initialState = [];
  const [count, setCount] = useState(0);
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
  });
  const inputRef = useRef();

  const addTodo = event => {
    event.preventDefault();
    const t = dispatch({
      type: "ADD_TODO",
      name: inputRef.current.value,
      complete: false
    });
    console.log('t', t);
    inputRef.current.value = "";
  };

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
      <Fragment>
        {todos.map(t => (
          <Todo key={t.id} todo={t} dispatch={dispatch} />
        ))}
      </Fragment>
      <div className="todo-input">
        <form onSubmit={addTodo}>
          <input
            ref={inputRef}
            type="search"
            id="add-todo"
            placeholder="Add Todo..."
          />
        </form>
      </div>
      <ConnectedApp />
    </div>
  );
};

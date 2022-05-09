import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadTodos } from '../store/todos/todos-actions';


const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  return (
    <div>
      Todos: {todos.length}
    </div>
  );
};

export { TodoList };
import { useState, useEffect } from 'react';
import TodoContent from '../components/atoms/TodoContent';
import FormTodo from '../components/molucules/FormTodo';

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('api/todo', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();

      if (response.ok) {
        setTodos(json);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div className="container mx-auto lg:w-[70%] md:w-[80%] w-[90%] py-20">
      <FormTodo />
      <h2 className="text-2xl font-bold text-zinc-800 mb-10">Your Todo List</h2>
      {todos.map((todo) => {
        return <TodoContent key={todo._id} todo={todo} />;
      })}
    </div>
  );
};

export default Home;

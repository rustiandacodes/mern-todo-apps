import React, { useState } from 'react';
import { useTodosContext } from '../../hooks/useTodosContext';

const FormTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { dispatch } = useTodosContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = { title, description };
    const response = await fetch('api/todo', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const json = await response.json();
    if (response.ok) {
      setTitle('');
      setDescription('');
      dispatch({ type: 'CREATE_TODOS', payload: json });
    }
  };

  return (
    <form className=" mx-auto mb-20" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold mb-10">Add New Todo</h3>
      <label className="mb-5 font-semibold">Title</label>
      <input
        placeholder="Type your todo title here"
        type="text"
        required
        value={title}
        className="w-full rounded-lg my-5 p-5 mb-8 shadow-lg"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <label className="mb-5 font-semibold">Description</label>
      <textarea
        placeholder="Type you description todo here..."
        type="text"
        required
        value={description}
        className="w-full h-40 rounded-lg my-5 p-5 shadow-lg"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <div className="flex justify-end">
        <button className="w-full lg:w-40 p-3 font-semibold text-white bg-teal-400 rounded-lg shadow-lg hover:opacity-80">Add Todo</button>
      </div>
    </form>
  );
};

export default FormTodo;

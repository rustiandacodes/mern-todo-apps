import React, { useState } from 'react';

const FormTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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

    console.log(json, json.error);
  };

  return (
    <form className="w-full mb-20" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold mb-10">Add New Todo</h3>
      <label className="mb-5 font-semibold">Title</label>
      <input
        type="text"
        value={title}
        className="w-full rounded-lg my-5 p-3"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <label className="mb-5 font-semibold">Description</label>
      <textarea
        type="text"
        value={description}
        className="w-full h-40 rounded-lg my-5 p-3"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button className="w-full p-3 font-semibold text-white bg-teal-400 rounded-lg hover:opacity-80">Add Todo</button>
    </form>
  );
};

export default FormTodo;

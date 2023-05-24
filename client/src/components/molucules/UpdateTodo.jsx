import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const UpdateTodo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('api/todo/' + params.id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();

      if (response.ok) {
        setTitle(json.title);
        setDescription(json.description);
      }
    };
    fetchTodos();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = { title, description };
    const response = await fetch('api/todo/' + params.id, {
      method: 'PATCH',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const json = await response.json();
    response.ok ? navigate('/') : console.log(response(json.error));
  };
  return (
    <form className="container md:w-[60%] w-[80%] mx-auto mb-20" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold mb-10">Edit Todo</h3>
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
      <div className="flex gap-5">
        <Link to={'/'} className="w-1/2 p-3 font-semibold text-center text-sky-400 border-2 border-sky-400 rounded-lg hover:opacity-80">
          Back
        </Link>
        <button className="w-1/2 p-3 font-semibold text-white bg-teal-400 rounded-lg hover:opacity-80">Save</button>
      </div>
    </form>
  );
};

export default UpdateTodo;

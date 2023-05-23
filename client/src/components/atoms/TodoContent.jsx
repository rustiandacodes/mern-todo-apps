import React from 'react';
import { Trash2 } from 'react-feather';
import { Edit } from 'react-feather';

const TodoContent = ({ todo }) => {
  const handleDelete = async () => {
    const response = await fetch('api/todo/' + todo._id, {
      method: 'DELETE',
    });
  };
  return (
    <div className="rounded-lg bg-white shadow-lg mb-8 p-10">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold text-teal-500">{todo.title}</h3>
        <div className="flex gap-3">
          <Edit className="cursor-pointer hover:text-sky-500" size={20} />
          <Trash2 className="cursor-pointer hover:text-red-500" size={20} onClick={handleDelete} />
        </div>
      </div>
      <p className="pt-8">{todo.description}</p>
    </div>
  );
};

export default TodoContent;

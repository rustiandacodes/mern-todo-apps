import React from 'react';
import { Trash2 } from 'react-feather';
import { Edit } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { useTodosContext } from '../../hooks/useTodosContext';

const TodoContent = ({ todo }) => {
  const navigate = useNavigate();
  const { dispatch } = useTodosContext();

  const handleDelete = async () => {
    const response = await fetch('api/todo/' + todo._id, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_TODOS', payload: json });
    }
  };
  return (
    <div className="rounded-lg bg-white shadow-lg mb-8 p-10">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold text-teal-500">{todo.title}</h3>
        <div className="flex gap-3">
          <Edit
            className="cursor-pointer hover:text-sky-500"
            size={20}
            onClick={(e) => {
              navigate(`/${todo._id}`);
            }}
          />
          <Trash2 className="cursor-pointer hover:text-red-500" size={20} onClick={handleDelete} />
        </div>
      </div>
      <p className="pt-8">{todo.description}</p>
    </div>
  );
};

export default TodoContent;

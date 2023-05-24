import React from 'react';

const ThereisNoTodo = () => {
  return (
    <div className="flex justify-center items-center w-full h-40 rounded-lg border-2 border-red-400">
      <p className="text-red-400 font-bold">No Such A Todo list in here, please add one!</p>
    </div>
  );
};

export default ThereisNoTodo;

import React from 'react';
import logo from '../logo.svg';
const LearningTailwind = () => {
  return (
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg">
      <div className="shrink-0">
        <img className="size-12" src={logo} alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
      <button className="... bg-sky-500 hover:bg-sky-700">Save changes</button>
    </div>
  );
};

export default LearningTailwind;

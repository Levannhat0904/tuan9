import React from 'react';

const Form = () => {
  return (
    <div className="mx-auto mb-[377px] mt-64 w-[500px]">
      <div className="rounded border-2 border-slate-200">
        <h3 className="pt-4 text-center">Login</h3>
        <form className="pl-2 pr-2">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Username
            </span>
            <input
              type="text"
              //       value="tbone"
              className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              className="... peer mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
              Please provide a valid email address.
            </p>
          </label>
          <div className="mx-auto mb-3 flex items-center justify-center">
            <button className="rounded bg-sky-500 pb-2 pl-2 pr-2 pt-2 hover:bg-sky-700">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

import React, { useState } from "react";

export default function Login() {
  const [hide, setHide] = useState(false);

  function hidePage(e) {
    e.preventDefault();
    setHide(true);
  }

  return (
    <form
      onSubmit={hidePage}
      className={`absolute inset-0 ${
        hide ? "hidden" : "flex"
      } items-center justify-center bg-black/80`}
    >
      <div className="form-pomodoro flex flex-col items-center justify-center rounded-xl bg-white px-16 py-[3rem]">
        <h1 className="mb-16 text-center text-2xl font-bold">Login Form</h1>
        <div className="username">
          <label htmlFor="username" className="inline-block w-[6rem] font-bold">
            Username
          </label>
          <input
            type="text"
            className="rounded border border-black focus:outline-none"
            id="username"
          />
        </div>
        <div className="password">
          <label
            htmlFor="username"
            className="mt-5 inline-block w-[6rem] font-bold"
          >
            Password
          </label>
          <input
            type="password"
            className="rounded border border-black focus:outline-none"
            id="username"
          />
        </div>
        <button className="mt-10 inline-block w-full rounded bg-green-800 py-2 font-bold text-white">
          Login
        </button>
      </div>
      <h1
        onClick={hidePage}
        className="absolute right-5 top-5 cursor-pointer text-3xl font-bold text-white"
      >
        X
      </h1>
    </form>
  );
}

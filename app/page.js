"use client";
import React, { useState, useEffect } from "react";

const page = () => {
  const [val, setval] = useState("");
  const [val2, setval2] = useState("");
  const [members, setmembers] = useState([]);
  const [count, setcount] = useState(true);

  const submithandler = (e) => {
    e.preventDefault();
    if (
      /^([a-zA-Z0-9_]{3,50})@([a-zA-Z]{3,10})\.([a-z]{3,5})(\.[a-z]{2,5})?$/.test(
        val
      ) &&
      /^(?=\S*[\d])(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[^A-Za-z0-9])\S{8,}$/.test(
        val2
      )
    ) {
      const newentry = { email: val, password: val2 };
      setmembers(() => [...members, newentry]);
      setval("");
      setval2("");
      setcount(true);
    } else {
      setcount(false);
    }
  };

  return (
    <>
      <form
        onSubmit={submithandler}
        className="max-w-md mx-auto p-6 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 shadow-md rounded-md"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            autoComplete="off"
            type="text"
            name="email"
            id="email"
            value={val}
            onChange={(e) => {
              setval(e.target.value);
            }}
            className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-white text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            value={val2}
            onChange={(e) => {
              setval2(e.target.value);
            }}
            autoComplete="off"
            type="password"
            name="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-white text-blue-800 px-4 py-2 rounded-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-100"
        >
          Sign In
        </button>
      </form>
      <div className="absolute top-0 right-0 "></div>
      <div>
        {members.map((elem, i) => {
          return (
            <li key={i} className="bg-gray-200 p-2 my-2 rounded-md text-center">
              <p className="text-blue-500">Email :{elem.email}</p>
              <p className="text-green-500">Password :{elem.password}</p>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default page;

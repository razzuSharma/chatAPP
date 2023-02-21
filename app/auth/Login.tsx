"use client";
import React from "react";
import { signIn } from "next-auth/react";
function Login() {
  return (
    <li className="list-none">
      <button className="text-lg bg-teal-300 text-white py-2 px-4 rounded-md font-sans " onClick={() => signIn()}>
        Sign In
      </button>
    </li>
  );
}

export default Login;

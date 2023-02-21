import Link from "next/link";
import React from "react";
import Login from "./Login";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
async function Nav() {
const session = await getServerSession(authOptions)
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>Hello</Link>
      <ul className="flex itmes-center gap-6">
        <Login />
      </ul>
    </nav>
  );
}

export default Nav;

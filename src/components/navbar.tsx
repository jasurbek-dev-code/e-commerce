import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 md:px-12 py-2 fixed top-0 left-0 w-full z-50 shadow bg-white">
      <Link href={"/"}>
        <Image src={"./next.svg"} alt="logo" width={150} height={40} />
      </Link>
      <div className="flex space-x-2.5 text-sm items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
          <Link href={"/"} className="mr-5 hover:text-gray-900">All products</Link>
        </nav>
        <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:text-black hover:bg-transparent ">
          Log in
        </button>
        <button className="button bg-transparent border-blue-600 text-black hover:border-transparent hover:text-white hover:bg-blue-600 ">
          Sign up
        </button>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { CgShoppingCart } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const Header = () => {
  //cart
  const { cart } = useContext(AppContext);

  //wenn clerk singin geöffnet wird header hidden/ auch footer
  const { user } = useUser();
  // //
  // console.log(window.location.href);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    setIsLoggedIn(window.location.href.toString().includes("sign-in"));
  }, []);
  return (
    !isLoggedIn && (
      <header className="bg-white header">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={50}
            height={50}
            className="logo"
            priority={true}
          />

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#">
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#">
                    Explore
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#">
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#">
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-400"
                    href="/sign-in">
                    Login
                  </a>

                  <a
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-teal-400/75 sm:block"
                    href="#">
                    Register
                  </a>
                </div>
              ) : (
                <>
                  <span className="flex items-center justify-center text-blue-700">
                    <CgShoppingCart className="text-2xl text-teal-500" />(
                    {cart.length})
                  </span>
                  <UserButton />
                </>
              )}

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default Header;

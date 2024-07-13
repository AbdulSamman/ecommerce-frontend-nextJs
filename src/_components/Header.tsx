"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { CgShoppingCart } from "react-icons/cg";
import { useEffect, useState, useRef } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import Link from "next/link";
import Cart from "../app/cart/_components/Cart";
import { AiOutlineMenu } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";

const Header = () => {
  //cart
  const { cart } = useContext(AppContext);
  const menuRef = useRef<HTMLDivElement>(null); // Ref für das Menü-Element

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  // // menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // menu close außerhalb menuIsOpen
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Überprüfe, ob das geklickte Element nicht das Menü ist und schließe das Menü dann
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  //wenn clerk singin geöffnet wird header hidden/ auch footer
  const { user } = useUser();
  // //
  // console.log(window.location.href);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    setIsLoggedIn(window.location.href.toString().includes("sign-in"));
  }, []);

  // resize menu wenn geöffnet ist
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    !isLoggedIn && (
      <header className="bg-white header fixed justify-between w-full top-0 z-20 shadow-md">
        <div className="flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link href={"/"}>
            <svg
              className="w-8 text-[#111827]"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none">
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between ">
            <nav
              ref={menuRef}
              aria-label="Global"
              className={`${isMenuOpen ? "menuIsOpen" : "hidden "} md:block`}>
              {!isMenuOpen}
              <ul className="flex items-center gap-6 text-sm text-gray-200 ">
                <li>
                  <Link className=" transition hover:text-gray-500/75" href="#">
                    Home
                  </Link>
                </li>

                <li>
                  <Link className=" transition hover:text-gray-500/75" href="#">
                    Explore
                  </Link>{" "}
                </li>

                <li>
                  <Link
                    className="  transition hover:text-gray-500/75"
                    href="#">
                    Projects
                  </Link>{" "}
                </li>

                <li>
                  <Link
                    className="  transition hover:text-gray-500/75"
                    href="#">
                    About Us
                  </Link>{" "}
                </li>

                <li>
                  <Link className=" transition hover:text-gray-500/75" href="#">
                    Contact Us
                  </Link>{" "}
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-400"
                    href="/sign-in">
                    Login
                  </Link>
                  <Link
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-teal-400/75 sm:block"
                    href="/sign-up">
                    Register
                  </Link>
                </div>
              ) : (
                <>
                  <span className="flex items-center justify-center text-blue-700">
                    <CgShoppingCart
                      className="text-2xl text-teal-500 cursor-pointer hover:scale-110"
                      onClick={handleCartOpen}
                    />
                    ({cart.length})
                  </span>
                  <>
                    <UserButton afterSignOutUrl="/" />
                    {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}
                  </>
                </>
              )}

              <button
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden "
                onClick={handleToggleMenu}>
                {!isMenuOpen ? (
                  <AiOutlineMenu className="menuIcon" />
                ) : (
                  <BsXLg className="menuIcon" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default Header;

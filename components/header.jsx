import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import { nav } from "../public/data/nav";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/userSlice";
import Notes from "./ui/note";
import Dropdown from "./ui/dropdown";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const refs = useRef({});
  return (
    <>
      {/* <Notes /> */}
      <header
        ref={(el) => (refs.current.header = el)}
        className="d-flex align-items-center"
      >
        <div className="d-flex container justify-content-between align-items-center">
          <Link href="/">
            <a title="frontendzone">
              <b className="m-0">{process.env.NEXT_PUBLIC_APP_NAME}</b>
            </a>
          </Link>
          <nav className="d-flex justify-content-between mobilelinks">
            <ul className="list-unstyled d-flex align-items-center mb-0">
              {nav.map((li, i) => {
                return (
                  <li
                    key={i}
                    onClick={(e) =>
                      refs.current.header.classList.remove("active")
                    }
                  >
                    <Link href={li.url}>
                      <a title={li?.title}> {li.text}</a>
                    </Link>
                    <Dropdown />
                  </li>
                );
              })}
            </ul>
          </nav>
          <button
            role="menu"
            aria-label="button"
            className="menu"
            onClick={(e) => refs.current.header.classList.toggle("active")}
          >
            <span role="button" aria-label="icon"></span>
            <span role="button" aria-label="icon"></span>
            <span role="button" aria-label="icon"></span>
          </button>

          {user && (
            <>
              <div
                ref={(el) => (refs.current.profile = el)}
                className="profile dropdown bg-white shadow"
              >
                <ul className="list-unstyled mb-0">
                  <div className="p-2 border-bottom">name:{user?.name}</div>
                  <li>Profile</li>
                  <li>Dashboard</li>
                  <li>orders</li>
                  <li onClick={(e) => dispatch(logout())}>logout</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};
export default Header;

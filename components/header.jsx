import Link from "next/link";
import { useRef } from "react";
import { nav, userlinks } from "../public/data/nav";
import { useDispatch, useSelector } from "react-redux";
import { VscAccount } from "react-icons/vsc";
import Dropdown from "./ui/dropdown";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const refs = useRef({});
  return (
    <>
    
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
          <nav className="d-flex  mobilelinks">
            <ul
              itemScope
              itemType="http://www.schema.org/SiteNavigationElement"
              className="list-unstyled d-flex align-items-center mb-0"
            >
              {nav.map((li, i) => {
                return (
                  <li
                    itemProp="name"
                    key={i}
                    onClick={(e) =>
                      refs.current.header.classList.remove("active")
                    }
                  >
                    <Link prefetch={false} href={li.url}>
                      <a itemProp="url" title={li?.title}>
                        {li.text}
                      </a>
                    </Link>
                  
                  </li>
                );
              })}
              
            </ul>
            <ul className="list-unstyled mb-0 innermenu">
              {0 ? (
              <li>
                <Link href="/login">Login</Link>
              </li>
            ) : (
              <>
                  <li className="pointer userselect-none" onClick={e=>{e.currentTarget.lastChild.classList.toggle("active")}}>
                      <span className="user">
                      <VscAccount size={25}/> Ashish Yadav
                    </span>
                    <Dropdown links={userlinks} />
                  </li>
              </>
            )}
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
        </div>
      </header>
    </>
  );
};
export default Header;

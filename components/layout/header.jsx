import Link from "next/link";
import { useEffect, useRef } from "react";
import { nav, userlinks } from "../../public/data/nav";
import { useSelector } from "react-redux";
import { VscAccount } from "react-icons/vsc";
import Dropdown from "../ui/dropdown";
import { Styled } from "@/styles/header";

const Header = ({ progress }) => {
    const user = useSelector(state => state.user.data);
    const refs = useRef({});

    useEffect(() => {
        const closeNav = () => refs.current.header.classList.remove("active");
        window.onscroll = () => {
            closeNav();
        };
        return window.removeEventListener("scroll", closeNav);
    }, []);

    return (
        <>
            <Styled.header
                ref={el => (refs.current.header = el)}
                className="d-flex align-items-center"
            >
                <div className="d-flex container justify-content-between align-items-center">
                    <Link href="/" title="frontendzone" className="logo">
                        
                            <b className="m-0">{process.env.NEXT_PUBLIC_APP_NAME}</b>
                        
                    </Link>
                    <nav
                        className="d-flex  mobilelinks"
                        role="navigation"
                        itemScope
                        itemType="http://schema.org/SiteNavigationElement"
                    >
                        <ul role="menubar" className="list-unstyled d-flex align-items-center mb-0">
                            {nav.map((li, i) => {
                                return (
                                    <li
                                        role="menuitem"
                                        itemProp="name"
                                        key={i}
                                        onClick={e =>
                                            refs.current.header.classList.remove("active")
                                        }
                                    >
                                        <Link prefetch={false} href={li.url} {...{ className: li.class }}
                                                itemProp="url"
                                                title={li?.title}>
                                            
                                                {li.text}
                                           
                                        </Link>
                                    </li>
                                );
                            })}
                            {!user?.email && (
                                <li>
                                    <Link itemProp="url" title="login" prefetch={false} href={"/login"}>
                                      
                                            login
                                       
                                    </Link>
                                </li>
                            )}
                        </ul>
                        {user?.email && (
                            <ul className="list-unstyled mb-0 innermenu">
                                {0 ? (
                                    <li>
                                        <Link href="/login">Login</Link>
                                    </li>
                                ) : (
                                    <>
                                        <li
                                            className="pointer userselect-none"
                                            onClick={e => {
                                                e.currentTarget.lastChild.classList.toggle(
                                                    "active"
                                                );
                                            }}
                                        >
                                            <span className="user">
                                                <VscAccount size={25} /> {user.name}
                                            </span>
                                            <Dropdown links={userlinks} />
                                        </li>
                                    </>
                                )}
                            </ul>
                        )}
                    </nav>

                    <button
                        role="menu"
                        aria-label="button"
                        className="menu"
                        onClick={e => refs.current.header.classList.toggle("active")}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </Styled.header>
        </>
    );
};
export default Header;

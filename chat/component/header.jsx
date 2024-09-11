import socket from "chat/socket";
import { eventsType } from "chat/utils";
import Image from "next/image";
import React from "react";
import { FaVideo } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";

const Header = () => {
    return (
        <div className="head active" onClick={e => e.currentTarget.classList.toggle("active")}>
            <MdArrowBack
                onClick={e => {
                    e.stopPropagation();
                    e.currentTarget.parentElement.nextElementSibling.classList.toggle("home");
                }}
                className="back"
                size={25}
            />
            <span className="dp">
                <Image objectFit="cover" layout="fill" alt="" src={"/chat/profile.jpeg"} />
            </span>

            <div className="name">
                <span className="title">Frontendzone</span>
                <span className="lastseen">last seen today at 9:23 pm</span>
            </div>
            <FaVideo
                onClick={e => {
                    e.stopPropagation();
                    e.target.classList.add("ongoing");
                    socket.emit(eventsType.videocall, callerId);
                }}
                size={20}
            />
        </div>
    );
};

export default Header;

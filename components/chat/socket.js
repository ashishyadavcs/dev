import {useMemo} from "react";
import io from "socket.io-client";
const urls = [
    "https://frontendzone-chat-api.onrender.com",
    "http://localhost:4000",
    "https://frontendzone-chat-api.vercel.app",
    "http://192.168.0.6:4000",
];
const connectionURL = urls[0]
const socket =  io(connectionURL)
export default socket;

import Peer from "peerjs";
const peer = new Peer();
peer.on("open",id=>{
    peer.on("call",(id,stream)=>{
        
    })
})

import Peer from "peerjs";
const peer = new Peer();

const setVideo = (ref, stream) => {
    ref.current.srcObject = stream;
    ref.current.play();
};

export const callTo = (local, remote, id) => {
    var getUserMedia =
        navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    getUserMedia(
        { video: true, audio: true },
        function (stream) {
            setVideo(local, stream);
            var call = peer.call(id, stream);
            call.on("stream", function (remoteStream) {
                setVideo(remote, remoteStream);
            });
            peer.on("call", function (call) {
                getUserMedia(
                    { video: true, audio: true },
                    function (stream) {
                        setVideo(local, stream);
                        call.answer(stream); // Answer the call with an A/V stream.
                        call.on("stream", function (remoteStream) {
                            setVideo(remote, remoteStream);
                        });
                    },
                    function (err) {
                        console.log("Failed to get local stream", err);
                    }
                );
            });
        },
        function (err) {
            console.log("Failed to get local stream", err);
        }
    );
};


export default peer;

export const getStream = async () => {
    const getUserMedia =
        navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    await getUserMedia(
        { video: true, audio: true },
        function (stream) {
            return stream;
        },
        function (err) {
            console.log("Failed to get local stream", err);
        }
    );
};

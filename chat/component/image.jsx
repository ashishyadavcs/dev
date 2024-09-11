import Image from "next/image";
const Chatimg = ({ height = "300px", width = "100%", alt, objectFit = "cover", src }) => {
    return (
        <span
            style={{
                height,
                width,
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
                display: "inline-block",
            }}
        >
            <Image objectFit={objectFit} src={src} layout="fill" alt={alt} />
        </span>
    );
};

export default Chatimg;

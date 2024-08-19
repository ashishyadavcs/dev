import Image from "next/image";
const Chatimg = ({ height='160px', width='100%', alt, objectFit="cover", src }) => {
    return (
        <span style={{ height, width, position: "relative",display:"inline-block" }}>
            <Image objectFit={objectFit} src={src} layout="fill" alt={alt} />
        </span>
    );
};

export default Chatimg;

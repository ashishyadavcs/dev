import Image from "next/image";

const Blog = () => {
  return (
    <Image
      objectFit="contain"
      alt=""
      height={300}
      width={300}
      src="/ashish.jpg"
    />
  );
};

export default Blog;

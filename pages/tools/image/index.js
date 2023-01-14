import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [image, setimage] = useState();

  return (
    <div className="container">
      <input
        onChange={(e) => setimage(e.target.files)}
        type="file"
        accept="image/*"
      />
      {image && (
        <Image
          alt=""
          height={400}
          objectFit="cover"
          width={400}
          src={URL.createObjectURL(image[0])}
        />
      )}
    </div>
  );
};

export default Page;

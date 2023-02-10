import Image from "next/image";

const Group = () => {
  return (
    <>
      <h3>Whatsapp group</h3>
      <a
        className="text-decoration-none d-flex"
        target="_blank"
        rel="noreferrer"
        href="https://chat.whatsapp.com/BXzZdQacTfcHjyyRJGDBNx"
      >
        <Image
          src="/dev/group.jpeg"
          objectFit="contain"
          height={70}
          width={70}
          alt="frontend developers whatsapp group"
        />
        <span className="w-50 ml-2"> click or scan to join whatsapp group</span>
      </a>
    </>
  );
};

export default Group;

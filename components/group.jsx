import Image from "next/image";

const Group = () => {
  return (
    <>
      <h3>Whatsapp group</h3>
      <a
        className="text-decoration-none"
        target="_blank"
        rel="noreferrer"
        href="https://chat.whatsapp.com/BXzZdQacTfcHjyyRJGDBNx"
      >
        click on scan to join whatsapp group
        <Image
          src="/dev/group.jpeg"
          objectFit="contain"
          height={500}
          width={500}
          alt="frontend developers whatsapp group"
        />
      </a>
    </>
  );
};

export default Group;

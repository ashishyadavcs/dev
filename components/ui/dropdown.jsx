import Link from "next/link";

const Dropdown = ({ links }) => {
  return (
    <div className="dropdown">
      <ul className="list-unstyled mb-0">
        {links.map((el) => (
          <li key={el.text}>
            <Link href={el.link}>
              <a>{el.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

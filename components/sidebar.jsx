import Link from "next/link";
const Sidebar = ({ styles }) => {
  return (
    <div className={`my-4 `}>
      <h2 className="mt-4 mb-3">Categories</h2>
      <ul className={`list-unstyled d-flex flex-wrap ${styles.tag}`}>
        {[...Array(10)].map((tag) => {
          return (
            <li key={Math.random()}>
              <Link href="">HTML</Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.newsletter}>
        <h3>Subscribe to Newsletter</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" />
        </form>
      </div>
    </div>
  );
};

export default Sidebar;

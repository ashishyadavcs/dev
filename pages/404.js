import Link from "next/link";
export default function Custom404() {
  return (
    <>
      <div className="error404">
        <div className="container">
          <h1 className="gradient-text">Wrong URL</h1>
          <Link href="/">
            <a className="theme-btn d-inline-flex align-items-center px-4 cta-btn mt-2 text-decoration-none">
              Go Home
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

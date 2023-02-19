import { toast } from "react-toastify";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "../styles/auth.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
export const Page = () => {
  const [show, setShow] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  const from = router.query.from;
  const login = async (e) => {
    const formdata = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const data = await fetch(`/api/baseauth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .catch((err) =>
        res.json({
          success: false,
          message: "",
        })
      );
    if (data?.success) {
      toast.success("loged in successfully");
      router.push(from || "/dashboard");
    } else {
      toast.error(data?.message);
    }
  };
  return (
    <div className={styles.login}>
      <div>
        <h1>Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(e);
          }}
        >
          <input
            spellCheck="false"
            placeholder="email id"
            type="text"
            name="email"
            defaultValue="ashish56@gmail.com"
          />
          <div className="position-relative">
            <input
              placeholder="Password"
              className="mt-2"
              type={show ? "password" : "text"}
              name="password"
              defaultValue="ashish123"
            />
            <span
              className="position-absolute pointer"
              style={{ right: "20px", top: "25%" }}
            >
              {show ? (
                <AiOutlineEyeInvisible
                  onClick={(e) => setShow(false)}
                  size={20}
                />
              ) : (
                <AiOutlineEye onClick={(e) => setShow(true)} size={20} />
              )}
            </span>
          </div>
          <button className="themebtn w-100 my-3">Login</button>
        </form>
        <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
          <p>
            forgot <Link href="/resetpassword">password</Link>
          </p>
          <p className="mb-0">
            Login with <FcGoogle size={25} />
          </p>

          <p>
            dont have an acoount , <Link href="/register">register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
export async function getServerSideProps({ req }) {
  if (req.cookies["x-refresh"] || req.cookies["x-token"]) {
    return {
      redirect: {
        permanent: false,
        destination: req.headers.referer
          ? req.headers.referer.split(process.env.APP_URL)[1]
          : "/dashboard",
      },
    };
  } else {
    return {
      props: {},
    };
  }
}

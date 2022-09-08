import { toast } from "react-toastify";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "../styles/auth.module.css";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
export const Register = () => {
  const [show, setShow] = useState(true);
  const signup = async (e) => {
    const formdata = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(formdata);
    const data = await fetch(`http://localhost:4000/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => {
        if (res.ok) res.json();
        return {
          error: {
            message: res.statusText,
            status: res.status,
          },
        };
      })

      .catch((err) => console.log(err));
    if (data?.error) {
      toast.error(data?.error.message);
    } else {
      localStorage.setItem("token", data?.token);
      toast.success("Registred successfully");
    }
  };
  return (
    <div className={styles.login}>
      <div>
        <h1>register</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signup(e);
          }}
        >
          <input
            spellCheck="false"
            placeholder="Name"
            type="text"
            name="name"
            defaultValue="Ashish"
          />
          <input
            spellCheck="false"
            placeholder="email id"
            type="text"
            name="email"
            defaultValue="ashish@gmail.com"
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
              className="position-absolute bg-white h-100 pointer"
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
          <button className="themebtn w-100 my-3">Sign up</button>
        </form>
        <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
          <p className="mb-0">
            Login with <FcGoogle size={25} />
          </p>

          <p>
            Already have an acoount , <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

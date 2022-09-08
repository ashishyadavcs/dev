import { toast } from "react-toastify";
import React, { useLayoutEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "../styles/auth.module.css";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { saveUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const Page = () => {
  const [show, setShow] = useState(true);
  const [otpverified, setverified] = useState(1);

  return (
    <div className={styles.login}>
      <div>
        <h1>Reset Password</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            spellCheck="false"
            placeholder="email id"
            type="text"
            name="email"
            disabled
            defaultValue="ashish56@gmail.com"
          />
          {otpverified && (
            <>
              <div className="position-relative">
                <input
                  placeholder="New Password"
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
              <div className="position-relative">
                <input
                  placeholder="Confirm Password"
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
            </>
          )}
          <button className="themebtn w-100 my-3">
            {otpverified ? "change password" : "Send OTP"}
          </button>
        </form>
        <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
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

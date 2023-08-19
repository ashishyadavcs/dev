import { toast } from "react-toastify";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";
import Loginwithgoogle from "@/components/auth/google-login";
import { Styled } from "@/styles/auth";

export const Register = () => {
  const router = useRouter();
  const [show, setShow] = useState(true);
  const signup = async (e) => {
    const formdata = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const data = await fetch(`/api/baseauth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .catch((err) => "");
    if (data.success) {
      toast.success("Registered successfully ");
      router.push("/dashboard");
    } else {
      toast.error(data.message);
    }
  };


  return (
    <Styled.login>
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
              className="position-absolute h-100 pointer"
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
          <Loginwithgoogle/>

          <p>
            Already have an acoount , <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </Styled.login>
  );
};

export default Register;

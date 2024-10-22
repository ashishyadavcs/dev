import { toast } from "react-toastify";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";
import Loginwithgoogle from "@/components/auth/google-login";
import { Styled } from "@/styles/auth";

export const Register = ({ roles }) => {
    delete roles["admin"];
    const router = useRouter();
    const [show, setShow] = useState(true);
    const signup = async e => {
        const details = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            phone: "8764781268",
        };
        if (details.password.length < 8) {
            toast.error("Password should be atleast 8 charactors");
            return;
        }
        const formdata = details;
        const data = await fetch(`/api/baseauth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
        })
            .then(res => res.json())
            .catch(err => toast.error(err.message));
        if (data.success) {
            toast.success("Registered successfully ");
            router.push("/dashboard");
        } else {
            toast.error(JSON.stringify(data.message));
        }
    };

    return (
        <Styled.login>
            <div>
                <h1>register</h1>
                <form
                    onSubmit={e => {
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
                            style={{ right: "20px", top: "31%" }}
                        >
                            {show ? (
                                <AiOutlineEyeInvisible onClick={e => setShow(false)} size={20} />
                            ) : (
                                <AiOutlineEye onClick={e => setShow(true)} size={20} />
                            )}
                        </span>
                    </div>
                    <div className="position-relative">
                        <select name="role" className="register-as">
                            <option hidden selected>
                                register as
                            </option>
                            {Object.keys(roles).map(op => (
                                <option value={roles[op]}>{op}</option>
                            ))}
                        </select>
                        <span
                            className="position-absolute h-100 pointer"
                            style={{ right: "20px", top: "25%" }}
                        ></span>
                    </div>
                    <button className="themebtn w-100 my-3">Sign up</button>
                </form>
                <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
                    <Loginwithgoogle title="signup with" />

                    <p>
                        Already have an acoount , <Link href="/login">Login</Link>
                    </p>
                </div>
            </div>
        </Styled.login>
    );
};

export default Register;
export async function getServerSideProps({ req }) {
    const roles = await fetch(`${process.env.APP_URL}/api/roles`).then(res => res.json());
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
            props: { roles },
        };
    }
}

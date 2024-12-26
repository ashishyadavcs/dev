import { NextSeo } from "next-seo";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import { fetchData } from "utils/serversidefetch";

const Profile = ({ user }) => {
    const [dp, setdp] = useState("");
    const updateProfile = async () => {};
    return (
        <ProfileCSS className="container py-4">
            <NextSeo noindex />
            <h1>Profile details</h1>
            <form className="d-flex flex-column">
                <label className="profile-img">
                    {dp && (
                        <Image
                            className="img"
                            objectFit="contain"
                            height={100}
                            width={100}
                            layout="fill"
                            src={URL.createObjectURL(dp)}
                        />
                    )}

                    <input name="image" onChange={e => setdp(e.target.files[0])} type="file" />
                </label>
                <label>
                    <span>Name</span>
                    <input type="text" value={user.name} />
                </label>
                <label>
                    <span>Email</span>
                    <input type="text" value={user.email} />
                </label>
                <label>
                    <span>password</span>
                    <input type="password" value={user.password} />
                </label>
            </form>
        </ProfileCSS>
    );
};

const ProfileCSS = styled.div`
    .profile-img {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        position: relative;
        cursor: pointer;
        .img {
            pointer-events: none;
        }
    }
`;

export default Profile;
export async function getServerSideProps({ req, res }) {
    const data = await fetchData(`${process.env.APP_URL}/api/profile`, req);
    return {
        props: {
            user: data.user,
        },
    };
}

import React from "react";
import { fetchData } from "utils/serversidefetch";
const Page = ({ data }) => {
    return <div className="my-4 container">{data.dashboard.user.name}</div>;
};

export default Page;
export async function getServerSideProps({ req }) {
    const data = await fetchData(`${process.env.APP_URL}/api/dashboard`, req);
    return {
        props: {
            data,
        },
    };
}

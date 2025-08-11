import Details from "@/components/Details";
import React from "react";

const Page = ({ placeData }) => {
    return <Details data={placeData}/>;
};

export default Page;
export async function getServerSideProps({ query }) {
    let placeData;
    const { slug } = query;
    if (slug.length == 1) {
        let countryname = slug[0];
        const req = await fetch(`https://countriesnow.space/api/v0.1/countries`);
        if (!req.ok) {
            return {
                props: {
                    data: "",
                },
            };
        }
        const { data } = await req.json();
        placeData = [...data].filter(data => data.country == countryname);
       
        return {
            props: {
                 placeData:placeData[0],
            },
        };
    }
   
}

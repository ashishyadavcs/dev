import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

const Page = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        (() => {
            fetch("https://fakestorseapi.codjkfghym/producs")
                .then(res => res.json())
                .then(data => {
                    setproducts([...data]);
                });
        })();
    }, []);

    return (
        <>
            <NextSeo noindex />
            {products.map(p => (
                <img src={p.image} height={300} width={300} />
            ))}
        </>
    );
};

export default Page;

import { BreadcrumbJsonLd } from "next-seo";
import { useRouter } from "next/router";
import { memo } from "react";

const Breadcrumb = () => {
    const router = useRouter();
    const urls = router.asPath
        .split("/")
        .filter(el => el != "")
        .map((el, index, arr) => ({
            position: index + 2,
            name: el,
            item: `${process.env.NEXT_PUBLIC_APP_URL}${
                index == arr.length - 1
                    ? router.asPath
                    : "/" +
                      router.asPath
                          .split("/")
                          .filter(el => el != "")
                          .slice(0, index + 1)
                          .join("/")
            }`,
        }));

    return (
        <>
            <BreadcrumbJsonLd
                itemListElements={[
                    {
                        position: 1,
                        name: "home",
                        item: process.env.NEXT_PUBLIC_APP_URL,
                    },
                    ...urls,
                ]}
            />
        </>
    );
};

export default memo(Breadcrumb);

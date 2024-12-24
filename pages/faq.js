import Faq from "@/components/faq";
import { NextSeo } from "next-seo";
import { emoji } from "public/data/emoji";

const Page = () => {
    const meta = {
        title: `Frequently asked questions`,
    };
    return (
        <>
            <NextSeo title={` ${meta.title} ${emoji.fire}`} />
            <div className="container py-4">
                <Faq
                    title={meta.title}
                    data={[
                        {
                            que: "Can I learn front-end in 2 months?",
                            ans: "Yes, you can learn the fundamentals of front-end development in 2 months with focused effort and a structured plan. However, becoming proficient or job-ready will take more time and practice. Here's a suggested roadmap for 2 months:",
                        },
                        {
                            que: `Is 3 months enough for front-end developer?`,
                            ans: `Yes, 3 months is enough to learn front-end development to a level where you can build functional websites and applications, especially if you dedicate consistent time and effort.`,
                        },
                    ]}
                />
            </div>
        </>
    );
};

export default Page;

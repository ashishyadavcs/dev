import Ashish from "@/components/ashish";
import Whatsapp from "@/components/whatsapp";
import { NextSeo } from "next-seo";
const Page = () => {
    return (
        <div className="bg">
            <style jsx>{`
                .bg {
                    padding: 6vw 0;
                    background: radial-gradient(circle, aqua, lime);
                }
            `}</style>
            <div className="container py-4">
                <NextSeo
                    title="Frontend Training | website design and development"
                    description="GET frontend and website design training with Experienced software engineer "
                />
                <h1 className="text-center text-white mb-4">Frontend Mentorship</h1>
                <Ashish style={{ maxWidth: "500px", margin: "auto" }} />
                <Whatsapp />
            </div>
        </div>
    );
};

export default Page;

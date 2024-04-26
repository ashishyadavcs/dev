import dynamic from "next/dynamic";
const Contenteditor = dynamic(() => import("@/components/ui/ckeditor"), {
    ssr: false,
});

const demo = () => {
    return (
        <>
            <Contenteditor />
        </>
    );
};

export default demo;

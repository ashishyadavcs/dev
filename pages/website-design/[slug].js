import Webdesign from "@/components/webdesign";
const Page = ({ title }) => {
  return <Webdesign title={title} />;
};

export default Page;
export async function getServerSideProps(req) {
  return {
    props: {
      title: req.query.slug || "",
    },
  };
}

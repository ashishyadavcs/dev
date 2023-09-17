import { getpreviewpage} from "lib/posts";

const Page = () => {
  return (
    <div>preview page</div>
  )
}

export default Page
export async function getStaticProps(req) {
    const data=req.previewData
    const post = await getpreviewpage(data.p);
     console.log(post)
    if (post === undefined)
        return {
            notFound: true,
        };

    return {
        props: {
            // post,
        },
        // revalidate: 10,
    };

}
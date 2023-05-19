import { countryslug } from "utils/common";

const Page = ({ data }) => {
  const country = data.split("-").pop();
  const code = data.split("-").splice(0, 1)[0];

  return (
    <div className="container my-4">
      <h1>
        {code} is country code of {country}
      </h1>
    </div>
  );
};

export default Page;
// export async function getStaticPaths() {
//   const posts = await fetch(`${process.env.APP_URL}/data/ccode.json`)
//     .then((res) => res.json())
//     .catch((err) => []);
//   const paths = posts.map((post) => ({
//     params: {
//       slug: `/countrycode/${post.dial_code}-country-code-${post.name}`,
//     },
//   }));

//   return {
//     paths,
//     fallback: "blocking",
//   };
// }
export async function getServerSideProps(req) {
  return {
    props: {
      data: req.query.slug,
    },
  };
}

import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { countryslug } from "utils/common";
const Page = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <NextSeo title="Country codes of all country of world" />
      <style>{`
      table td,table th{padding:10px; border:2px solid #ddd}
      `}</style>
      <div className="container my-4">
        <h1>Country code of all country with their code name and dial code</h1>
        <p>
          Country codes, also known as country calling codes or international
          dialing codes, are numerical codes used to identify countries or
          regions when making international telephone calls. Here are some
          common country codes for different countries:
        </p>
        <table className="my-4">
          <thead>
            <tr>
              <th>Country</th>
              <th>Code</th>
              <th>Dial code</th>
            </tr>
          </thead>
          <tbody>
            {data.map((c, i) => (
              <tr
                key={i}
                onClick={(e) =>
                  router.push(
                    `/countrycode/${c.dial_code}-country-code-${c.name}`
                  )
                }
                title={`${c.name} country code`}
              >
                <td>{c.name}</td>
                <td>{c.code}</td>
                <td>{c.dial_code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Page;
export async function getStaticProps(req) {
  const result = await fetch(`${process.env.APP_URL}/data/ccode.json`)
    .then((res) => res.json())
    .catch((err) => "");
  return {
    props: {
      data: result,
    },
  };
}

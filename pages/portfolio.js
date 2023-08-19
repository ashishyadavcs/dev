import styles from "@/styles/portfolio.module.css";
import { NextSeo } from "next-seo";
import Image from "next/image";

const Portfolio = ({ projects }) => {
  console.log(projects)
  return (
    <div className="container my-4 ">
      <NextSeo noindex nofollow />
      <div className={styles.portfolios}>
        {projects?.map((project) => {
          return (
            <div key={project.id} className={styles.item}>
              <div className={styles.thumbnail}>
                {project.image && (
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt={project.title}
                    src={project.image}
                  />
                )}
              </div>
              <div className={styles.content}>
                <h2>{project?.title}</h2>
                <p>{project?.description}</p>
                <a target="_blank" rel="noreferrer" href={project?.url}>
                  live
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Portfolio;
export async function getServerSideProps() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/portfolio`)
const data=await result.json()
  return {
    props: {
      projects: data.portfolio || [],
    },
  };
}

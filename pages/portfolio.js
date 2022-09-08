import React from "react";
const Portfolio = ({ projects }) => {
  console.log(projects);
  return (
    <div className="container my-4 d-flex flex-wrap">
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className="project rounded-lg shadow-sm border border-1 border-success m-3 p-3"
          >
            <h2>{project?.title}</h2>
            <p>{project?.description}</p>
            <a href={project?.link}>{project?.link}</a>
          </div>
        );
      })}
    </div>
  );
};
export default Portfolio;
export async function getServerSideProps() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/portfolio?populate=*`
  );
  const result = await data.json();
  return {
    props: {
      projects: result.data.attributes.project,
    },
  };
}

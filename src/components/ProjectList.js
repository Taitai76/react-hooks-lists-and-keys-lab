import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projList = projects.map((Proj)=>{
    return(
      <ProjectItem key={Proj.id} name={Proj.name} about={Proj.about} technologies = {Proj.technologies}/>
    )
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projList}</div>
    </div>
  );
} 

export default ProjectList;

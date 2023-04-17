import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface IProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: IProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };
  const cancelEditing = () => {
    setProjectBeingEdited({});
  };
  return (
    <>
      <div className="row">
        {projects.map((project) => (
          <div className="cols-sm" key={project.id}>
            {project === projectBeingEdited ? (
              <ProjectForm onCancel={cancelEditing} project={project} />
            ) : (
              <ProjectCard project={project} onEdit={handleEdit} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

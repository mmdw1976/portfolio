import React, { useContext } from 'react';
import { ProjectContext } from '../../contexts/ProjectsContext';

import ProjectItem from './ProjectItem';


import './ProjectList.css';

const ProjectList = () => {
    const {state} = useContext(ProjectContext);
  return (
    <div>
      {state.map((project) => {
        return <div className='card' key={project.id}>
        <ProjectItem project={project}/>
        </div>
      })}
    </div>
  );
};

export default ProjectList;

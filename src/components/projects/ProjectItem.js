import React, { Fragment } from 'react';

import './ProjectList.css'



const ProjectItem = ({project}) => {
  console.log(project)
  return (
    <Fragment>
      <div className='snippet'>
        <div className='snippet-bg'>
          <img src={project.image} alt={project.name} />
        </div>
      </div>
      <div className='content-grid'>
        <h2>{project.name}</h2>
        <p>
          {project.content}
        </p>
        <button>Go to Project</button>
      </div>
    </Fragment>
  );
};

export default ProjectItem;

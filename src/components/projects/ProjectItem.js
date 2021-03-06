import React, { Fragment } from 'react';

import './ProjectList.css'



const ProjectItem = ({project}) => {
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
        <a target='_blank' rel='noreferrer' href={project.siteLink}><button>Go to Project</button></a>
      </div>
    </Fragment>
  );
};

export default ProjectItem;

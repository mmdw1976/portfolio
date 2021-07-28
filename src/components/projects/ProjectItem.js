import React, { Fragment } from 'react';

import './ProjectList.css'

const ProjectItem = () => {
  return (
    <Fragment>
      <div className='snippet'>
        <div className='snippet-bg'></div>
      </div>
      <div className='content-grid'>
        <h2>React Movie site</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          natus impedit placeat, cupiditate nihil facilis qui sed ea ullam in
          sapiente libero saepe id delectus excepturi optio asperiores
          repellendus totam! Eius totam perferendis accusamus minima mollitia
          dolores esse nulla odit!
        </p>
        <button>Go to Project</button>
      </div>
    </Fragment>
  );
};

export default ProjectItem;

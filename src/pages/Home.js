import React from 'react';
import ProjectList from '../components/projects/ProjectList';

import './Home.css';

const Home = () => {
  return (
    <section>
      <h1>Home</h1>
      <p>
        Welcome to my React Portfolio web-app. Here you can find the projects i
        made with modern JavaScript, HTML CSS and JavaScript, and React. Click
        on the link to go to the project of your choice.
      </p>
      <ProjectList />
    </section>
  );
};

export default Home;

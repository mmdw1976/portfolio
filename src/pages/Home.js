import React from 'react';
import ProjectList from '../components/projects/ProjectList';

import './Home.css';

const Home = () => {
  return (
    <section>
      <h1>Mijn Projecten</h1>
      <p>
        Welkom op mijn React portfolio web-app. Hier vindt je alle projecten die ik heb gemaakt met moder JavaScript, HTML CSS and JavaScript and React. Click op de knop ga naar project om naar de desbetreffende project te gaan. Mocht u vragen of idee&euml;n hebben neem dan contact met me op via de contact page,  of via een van de links in de footer.
      </p>
      <ProjectList />
    </section>
  );
};

export default Home;

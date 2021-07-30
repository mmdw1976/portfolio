import React from 'react';
import Header from './components/header/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// import contextprovider
import ProjectContextProvider from './contexts/ProjectsContext';

const App = () => {
  return (
    <div>
      <Header />
      <ProjectContextProvider>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route Path='/contact' exact component={Contact} />
        </Switch>
      </ProjectContextProvider>
    </div>
  );
};

export default App;

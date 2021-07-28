import React from 'react'
import Header from './components/header/Header'
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
    return ( 
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route Path="/contact" exact component={Contact} />
            </Switch>
        </div>
     );
}
 
export default App;
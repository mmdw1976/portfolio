import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

const PROJECTS = [
    {
        id: 1,
        image: '/images/movie-react.jpg',
        name: 'React Movie Site',
        content: 'Deze movie search site is ontworpen met React en React-Hooks. De Hooks die in deze site worden gebruikt zijn onderandere: useContext, useState, useReducer en useEffect. Ook wordt er gebruik gemaakt van TMD api.',
        siteLink: 'http://movie.m-webdesigner.com/'
    },
    {
        id: 2,
        image: '/images/github-finder.jpg',
        name: 'React GitHub finder',
        content: 'Deze GitHub finder site is ontworpen met React en React-Hooks. De Hooks die in deze site worden gebruikt zijn onderandere: useContext, useState, useReducer en useEffect. De api die gebruikt wordt is die van GitHub. Met deze site kun je gebruikers zoekn op GitHub.',
        siteLink: 'http://github-finder.m-webdesigner.com/'
    },
    {
        id: 3,
        image: '/images/contact-keeper.jpg',
        name: 'React Contact Keeper',
        content: 'Deze GitHub finder site is ontworpen met React en React-Hooks. De Hooks die in deze site worden gebruikt zijn onderandere: useContext, useState, useReducer en useEffect. De api die gebruikt wordt is die van GitHub. Met deze site kun je gebruikers zoekn op GitHub.',
        siteLink: 'http://degrassi-minister-57593.herokuapp.com/'
    }
]

const ProjectContextProvider = (props) => {
    const [state, setState] = useState(PROJECTS)
    return (
        <ProjectContext.Provider value={{state, setState}}>
            {props.children}
        </ProjectContext.Provider>
    );
}

export default ProjectContextProvider;
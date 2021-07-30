import React, { createContext, useState } from 'react';
// import movie from '../images/movie-react.jpg'


export const ProjectContext = createContext();


const PROJECTS = [
    {
        id: 1,
        image: '/images/movie-react.jpg',
        name: 'React Movie Site',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci natus impedit placeat, cupiditate nihil facilis qui sed ea ullam in sapiente libero saepe id delectus excepturi optio asperiores repellendus totam! Eius totam perferendis accusamus minima mollitia dolores esse nulla'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        name: 'Modern JavaScript',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci natus impedit placeat, cupiditate nihil facilis qui sed ea ullam in sapiente libero saepe id delectus excepturi optio asperiores repellendus totam! Eius totam perferendis accusamus minima mollitia dolores esse nulla'
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
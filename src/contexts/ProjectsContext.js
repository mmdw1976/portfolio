import React, { createContext } from 'react';

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    return (
        <ProjectContext.Provider value={{}}>
            {props.children}
        </ProjectContext.Provider>
    );
}

export default ProjectContextProvider;
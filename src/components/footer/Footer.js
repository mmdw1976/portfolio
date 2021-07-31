import React, { useContext } from 'react';
import { ProjectContext } from '../../contexts/ProjectsContext';

import './Footer.css';

const Footer = () => {
  const { state } = useContext(ProjectContext);
  return (
    <footer>
      <div className='box'></div>
      <div className='box'>
        <h2>Projecten</h2>
        <table>
          <tbody>
            {state.map((project) => {
              return (
                <tr key={project.id}>
                  <td>{project.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='box'></div>
    </footer>
  );
};

export default Footer;

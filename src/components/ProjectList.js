import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const { data } = await axios.get(
      'https://ironrest.herokuapp.com/WDPT80-projects'
    );
    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <h1>{project.title}</h1>
      ))}
    </div>
  );
};

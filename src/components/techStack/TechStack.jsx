import React from 'react';
import './TechStack.css';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaDatabase,
  FaServer,
  FaCloud,
  FaCode,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiNestjs,
  SiNextdotjs,
} from 'react-icons/si';
import { FaAws, FaGoogle, FaVuejs } from 'react-icons/fa6';

const TechStack = () => {
  const techItems = [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Vue.js', icon: <FaVuejs /> },
    { name: 'Svelte', icon: <FaCode /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Nuxt.js', icon: <FaCode /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'Nest.js', icon: <SiNestjs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Supabase', icon: <FaDatabase /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'GCP', icon: <FaGoogle /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Webpack', icon: <FaCode /> },
    { name: 'Vite', icon: <FaCode /> },
  ];

  return (
    <section className="tech-stack container section" id="tech-stack">
      <h2 className="section__title">My Tech Stack</h2>

      <div className="tech-stack__container">
        {techItems.map((tech, index) => (
          <div className="tech-stack__item" key={index}>
            <div className="tech-stack__icon">{tech.icon}</div>
            <h3 className="tech-stack__name">{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

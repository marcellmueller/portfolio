import './Main.scss';
import Project from './Project';

export default function Main(props) {
  const projects = [
    {
      name: 'Buy Things Sell Things',
      description:
        'Single page application made with NodeJS / Express / PostgreSQL',
      image: '/img/projects/buythings.png',
    },
    {
      name: 'Retro PC',
      description:
        'Retro styled web based computer system built with React / NodeJS / Express / PostgreSQL',
      image: '/img/projects/retropc.png',
    },
    {
      name: 'JS RPG',
      description:
        'One of my early projects I will always have appreciation for. Retro RPG made with Javascript',
      image: '/img/projects/jsrpg.png',
      demo: 'https://marcellmueller.github.io/JS-RPG/',
    },
    {
      name: 'Retro PC',
      description:
        'Retro styled web based computer system built with React / NodeJS / Express / PostgreSQL',
      image: '/img/projects/buythings.png',
    },
  ];

  let i = 0;
  const mapProjects = projects.map((project) => {
    i++;
    return (
      <Project
        key={i}
        name={project.name}
        description={project.description}
        image={project.image}
      />
    );
  });
  return <div className="main-content">{mapProjects}</div>;
}
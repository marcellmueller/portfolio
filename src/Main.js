import './Main.scss';
import Project from './Project';
import RetroImg from './img/projects/retropc.png';
import BuyThingsImg from './img/projects/buythings.png';
import RpgImg from './img/projects/jsrpg.png';

export default function Main(props) {
  const projects = [
    {
      name: 'Buy Things Sell Things',
      description:
        'Single page application made with NodeJS / Express / PostgreSQL',
      image: `${BuyThingsImg}`,
      demo: 'https://buythingssellthings.herokuapp.com/',
      github: 'https://github.com/CamBrown101/mid-term-project',
    },
    {
      name: 'Retro PC',
      description:
        'Retro styled web based computer system built with React / NodeJS / Express / PostgreSQL',
      image: `${RetroImg}`,
      demo: 'https://marcellmueller.github.io/JS-RPG/',
      github: 'https://github.com/marcellmueller/JS-RPG',
    },
    {
      name: 'JS RPG',
      description:
        'One of my early projects I will always have appreciation for. Retro RPG made with Javascript',
      image: `${RpgImg}`,
      demo: 'https://marcellmueller.github.io/JS-RPG/',
      github: 'https://github.com/marcellmueller/JS-RPG',
    },
    {
      name: 'Retro PC',
      description:
        'Retro styled web based computer system built with React / NodeJS / Express / PostgreSQL',
      image: `${RetroImg}`,
      demo: 'https://marcellmueller.github.io/JS-RPG/',
      github: 'https://github.com/marcellmueller/JS-RPG',
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
        demo={project.demo}
        github={project.github}
      />
    );
  });
  return <div className="main-content">{mapProjects}</div>;
}

import './Project.scss';

export default function Project(props) {
  return (
    <div className="project-card">
      <img className="project-image" alt="project" src={props.image}></img>
      <div className="project-description">
        <h3>{props.name}</h3>
        {props.description}
      </div>
      <div className="project-links">
        <div className="project-demo">
          <a target="_blank" rel="noopener noreferrer" href={props.demo}>
            DEMO
          </a>
        </div>
        <div className="project-github">
          <a target="_blank" rel="noopener noreferrer" href={props.demo}>
            GITHUB
            <img className="github-logo" alt="github" src="/img/github.png" />
          </a>
        </div>
      </div>
    </div>
  );
}

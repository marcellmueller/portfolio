import './Project.scss';

export default function Project(props) {
  return (
    <div className="project-card">
      <img className="project-image" alt="project" src={props.image}></img>
      <div className="project-description">
        <h3>{props.name}</h3>
        {props.description}
      </div>
    </div>
  );
}

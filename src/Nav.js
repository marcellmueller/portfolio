import './Nav.scss';

export default function Nav(props) {
  return (
    <div className="nav">
      <div className="nav-item">
        <a href="http://www.github.com/marcellmueller">GITHUB</a>
      </div>
      <div className="nav-item">
        <a href=" www.linkedin.com/in/marcel-l-mueller">LINKEDIN</a>
      </div>
      <div className="nav-item">
        <a href="mailto:mlmueller@protonmail.com">EMAIL</a>
      </div>
    </div>
  );
}

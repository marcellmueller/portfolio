import './Nav.scss';

export default function Nav(props) {
  return (
    <div className="nav">
      <div className="nav-item">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.github.com/marcellmueller"
        >
          GITHUB{' '}
          <img
            className="github-logo"
            alt="github"
            src="/img/githublight.png"
          />
        </a>
      </div>
      <div className="nav-item">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href=" www.linkedin.com/in/marcel-l-mueller"
        >
          LINKEDIN
        </a>
      </div>
      <div className="nav-item">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:mlmueller@protonmail.com"
        >
          EMAIL
        </a>
      </div>
    </div>
  );
}

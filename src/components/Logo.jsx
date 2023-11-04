import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={'/home'}>
      <img
        src="/codepen.png"
        alt="Logo Codepen"
        className="m-auto w-52 h-auto"
      />
    </Link>
  );
}

export default Logo;

import { Link } from 'react-router-dom';

function Logo({ size }) {
  return (
    <Link to={'/home'}>
      <img
        src="/codepen.png"
        alt="Logo Codepen"
        className={`m-auto ${size === 'small' ? 'w-40' : 'w-52'} h-auto`}
      />
    </Link>
  );
}

export default Logo;

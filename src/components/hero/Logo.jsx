import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="logo.svg" alt="Chain Surge logo" className="w-72" />
    </Link>
  );
}

export default Logo;

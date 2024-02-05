import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="logo.svg" alt="BlockScan logo" className="w-72" />
    </Link>
  );
}

export default Logo;

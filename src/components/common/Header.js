import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

// stateless component
const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/game" activeClassName="active">Game</Link>
      {" | "}
      <Link to="/help" activeClassName="active">Help</Link>
    </nav>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

class Header extends React.Component {

  render() {
    return (
      <div className="header-top">
        <div className="header-container">
          <Link
            to="/"
          ><h1>disUSsion</h1></Link>
        </div>
      </div>
    );
  }

}

export default Header;

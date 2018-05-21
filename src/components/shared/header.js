import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';

class Header extends React.Component {

  render() {
    const title = this.props.title;

    return (
      <div className="header-top">
        <div className="header-container">
          <Link
            to="/"
          ><h1>{title ? title : 'discUSsion'}</h1></Link>
        </div>
      </div>
    );
  }

}

export default Header;

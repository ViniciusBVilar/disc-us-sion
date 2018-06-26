import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';
import { APP_NAME } from '../../modules/home/home.page';

class Header extends React.Component {

  render() {
    const title = this.props.title;

    return (
      <div className="header-top">
        {title !== APP_NAME && <Link className="back-search" to="/">Back</Link>}
        <div className="header-container">
          <Link
            to="/"
          ><h1 color={'#12aa10'}>{title ? title : APP_NAME}</h1></Link>
        </div>
      </div>
    );
  }

}

export default Header;

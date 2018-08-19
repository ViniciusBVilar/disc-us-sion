import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../modules/home/home.page';
import '../../styles/header.css';

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const title = this.props.title;

    return (
      <div className="header-top">
        {title !== APP_NAME && (
          <Link className="back-search" to="/">
            Back
          </Link>
        )}
        <div className="header-container">
          <Link to="/">
            <h1 color={'#12aa10'}>{title ? title : APP_NAME}</h1>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;

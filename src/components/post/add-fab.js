import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/add-fab.css';

class AddFAB extends React.Component {

  static propTypes = {
    category: PropTypes.string.isRequired,
  };

  render() {
    const category = this.props.category;
    
    return (
      <div className="add-fab">
        <Link
          to={`/createForm/${category}`}
        >Add</Link>
      </div>
    );
  }
}

export default AddFAB;

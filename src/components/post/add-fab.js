import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/add-fab.css';

class AddFAB extends React.Component {

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

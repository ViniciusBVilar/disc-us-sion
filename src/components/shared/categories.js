import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.css';

class Categories extends React.Component {
  static propTypes = {
    categories: PropTypes.array.isRequired
  };

  render() {
    const categories = this.props.categories;

    return (
      <div>
        <h1>Categories</h1>
        <div className="home-card">
          <Link to="/">All categories</Link>
        </div>
        {categories &&
          categories.map((category, index) => (
            <div key={`div${index}`} className="home-card">
              <Link to={`/${category.path}`}>{category.name}</Link>
            </div>
          ))}
      </div>
    );
  }
}

export default Categories;

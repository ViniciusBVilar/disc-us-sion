import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

class Categories extends React.Component {
  
  categories = ['Science', 'Religion', 'Politics'];

  render() {
    return (
      <div>
        <h1>Categories</h1>
        <div className="home-card">
          <Link
            to="/"
          >All categories</Link>
        </div>
        {this.categories && this.categories.map((category, index) => (
          <div key={`div${index}`} className="home-card">
            <Link
              to={`/category/${category}`}
            >{category}</Link>
          </div>
        ))}
      </div>
    );
  }

}

export default Categories;

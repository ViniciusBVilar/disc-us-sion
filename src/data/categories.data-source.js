import { configGET } from './http-methods';

// const BASE_URL = process.env.BASE_URL || 'http://localhost:3001';
const BASE_URL = 'http://localhost:3001';

// GET /categories
// USAGE:
//   Get all of the categories available for the app. List is found in categories.js.
//   Feel free to extend this list as you desire.
export function fetchCategories() {
  return fetch(`${BASE_URL}/categories`, configGET())
    .then(res => res.json())
    .then(data => data.categories)
    .catch(error => console.error(error));
}

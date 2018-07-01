import { configDELETE, configGET } from './http-methods';

// const BASE_URL = process.env.BASE_URL || 'http://localhost:3001';
const BASE_URL = 'http://localhost:3001';

// GET /:category/posts
// USAGE:
//   Get all of the posts for a particular category
export function fetchCategoryPosts(category = '') {
  return fetch(`${BASE_URL}/${category}/posts`, configGET).then(res =>
    res.json()
  );
}

// GET /posts
// USAGE:
//   Get all of the posts. Useful for the main page when no category is selected.
export function fetchAllPosts() {
  return fetch(`${BASE_URL}/posts`, configGET).then(res => res.json());
}

//GET /posts/:id
//  USAGE:
//    Get the details of a single post
export function fetchPostDetails(id = '') {
  return fetch(`${BASE_URL}/posts/${id}`, configGET).then(res => res.json());
}

//GET /posts/:id/comments
//  USAGE:
//    Get all the comments for a single post
export function fetchPostComments(id = '') {
  return fetch(`${BASE_URL}/posts/${id}/comments`, configGET).then(res =>
    res.json()
  );
}

//POST /posts
//  USAGE:
//    Add a new post
//  PARAMS:
//    id - UUID should be fine, but any unique id will work
//    timestamp - timestamp in whatever format you like, you can use Date.now() if you like
//    title - String
//    body - String
//    author - String
//    category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
export function createPost(post) {
  return fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: { Authorization: 'letitbe' },
    body: JSON.stringify({ post })
  }).then(res => res.json());
}

//POST /posts/:id
//  USAGE:
//    Used for voting on a post
//  PARAMS:
//    option - String: Either 'upVote' or 'downVote'
export function votePost(id, params) {
  return fetch(`${BASE_URL}/posts/${id}`, {
    method: 'POST',
    headers: [{ Authorization: 'letitbe' }],
    body: JSON.stringify({ params })
  }).then(res => res.json());
}

//PUT /posts/:id
//  USAGE:
//    Edit the details of an existing post
//  PARAMS:
//    title - String
//    body - String
export function editPost(id, params) {
  return fetch(`${BASE_URL}/posts/${id}`, {
    method: 'PUT',
    headers: [{ Authorization: 'letitbe' }],
    body: JSON.stringify({ params })
  }).then(res => res.json());
}

//DELETE /posts/:id
//  USAGE:
//    Sets the deleted flag for a post to 'true'.
//    Sets the parentDeleted flag for all child comments to 'true'.
export function deletePost(id) {
  return fetch(`${BASE_URL}/posts/${id}`, configDELETE).then(res => res.json());
}

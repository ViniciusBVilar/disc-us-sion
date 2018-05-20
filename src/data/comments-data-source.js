import { configDELETE, configGET, configPOST, configPUT } from "./http-methods";

// const BASE_URL = process.env.BASE_URL || 'http://localhost:3001';
const BASE_URL = 'http://localhost:3001';

// POST /comments
// USAGE:
//   Add a comment to a post
// PARAMS:
//   id: Any unique ID. As with posts, UUID is probably the best here.
//   timestamp: timestamp. Get this however you want.
//   body: String
//   author: String
//   parentId: Should match a post id in the database.
export function comment(comment) {
  return fetch(`${BASE_URL}/comment`, configPOST(comment))
    .then((res) => res.json());
}

// GET /comments/:id
// USAGE:
//   Get the details for a single comment
export function getCommentDetails(id = '') {
  return fetch(`${BASE_URL}/comment/${id}`, configGET)
    .then((res) => res.json());
}

// POST /comments/:id
// USAGE:
//   Used for voting on a comment.
// PARAMS:
//   option - String: Either "upVote" or "downVote"
export function vote(id, params) {
  return fetch(`${BASE_URL}/comments/${id}`, configPOST(params))
    .then((res) => res.json());
}

// PUT /comments/:id
// USAGE:
//   Edit the details of an existing comment
// PARAMS:
//   timestamp: timestamp. Get this however you want.
//   body: String
export function editPost(id, params) {
  return fetch(`${BASE_URL}/comments/${id}`, configPUT(params))
    .then((res) => res.json());
}

// DELETE /comments/:id
// USAGE:
//   Sets a comment's deleted flag to 'true'
export function deletePost(id) {
  return fetch(`${BASE_URL}/comments/${id}`, configDELETE())
    .then((res) => res.json());
}

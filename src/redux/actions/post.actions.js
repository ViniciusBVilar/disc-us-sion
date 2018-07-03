import { fetchAllPosts,
  fetchPostDetails,
  fetchPostComments,
  createPost,
  editPost,
  votePost,
  deletePost } from '../../data/posts.data-source';

export const ERROR_POST = 'ERROR_POST';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';

export function errorPost(error) {
  return {
    type: ERROR_POST,
    error,
  };
}

export function receivePosts({ posts }) {
  return {
    type: FETCH_POST,
    posts,
  };
}

export const fetchPostsAPI = () => dispatch => (
  fetchAllPosts()
    .then(posts => dispatch(receivePosts({ posts })))
    .catch(error => dispatch(errorPost(error)))
);

export function createPostAction({ post }) {
  return {
    type: CREATE_POST,
    post,
  };
}

export const createPostAPI = post => dispatch => (
  createPost(post)
    .then(() => {})
    .catch(error => dispatch(errorPost(error)))
);

export function editPostAction({ post }) {
  const postId = post.id || '';
  return {
    type: EDIT_POST,
    post,
    postId,
  };
}

export const editPostAPI = post => dispatch => (
  editPost(post.id, post)
    .then(() => {})
    .catch(error => dispatch(errorPost(error)))
);

export function deletePostAction({ postId }) {
  return {
    type: DELETE_POST,
    postId,
  };
}

export const deletePostAPI = postId => dispatch => (
  deletePost(postId)
    .then(() => {})
    .catch(error => dispatch(errorPost(error)))
);

export function upVotePost({ postId }) {
  return {
    type: UP_VOTE_POST,
    postId,
  };
}

export const upVotePostAPI = postId => dispatch => (
  votePost(postId, {option: 'upVote'})
    .then(() => {})
    .catch(error => dispatch(errorPost(error)))
);

export function downVotePost({ postId }) {
  return {
    type: DOWN_VOTE_POST,
    postId,
  };
}

export const downVotePostAPI = postId => dispatch => (
  votePost(postId, {option: 'downVote'})
    .then(() => {})
    .catch(error => dispatch(errorPost(error)))
);

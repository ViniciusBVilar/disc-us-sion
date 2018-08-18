import {
  fetchAllPosts,
  fetchCategoryPosts,
  fetchPostDetails,
  fetchPostComments,
  createPost,
  editPost,
  votePost,
  deletePost
} from '../../data/posts.data-source';
import { mapPosts } from './post-actions.mapper';

export const POST_ERROR = 'ERROR_POST';
export const POST_IS_LOADING = 'POST_IS_LOADING';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';

export function postError(error) {
  return {
    type: POST_ERROR,
    error
  };
}

export function postIsLoading(bool) {
  return {
    type: 'POST_IS_LOADING',
    isLoading: bool
  };
}

export function fetchPosts(posts) {
  return {
    type: FETCH_POST,
    posts
  };
}

export const fetchPostsAPI = () => dispatch => {
  // dispatch(postIsLoading(true));
  fetchAllPosts()
    .then(posts => mapPosts(posts))
    .then(posts => dispatch(fetchPosts(posts)))
    .catch(error => dispatch(postError(error)));
};

export function fetchPostsByCategory(posts) {
  return {
    type: FETCH_POST,
    posts
  };
}

export const fetchCategoryPostsAPI = category => dispatch =>
  fetchCategoryPosts(category)
    .then(posts => dispatch(fetchPostsByCategory(posts)))
    .catch(error => dispatch(postError(error)));

export function fetchDetailsByPost(postId) {
  return {
    type: FETCH_POST,
    postId
  };
}

export const fetchPostDetailsAPI = postId => dispatch => {
  fetchPostDetails(postId)
    .then(() => dispatch(fetchPostDetails(postId)))
    .catch(error => dispatch(postError(error)));
};

export function fetchCommentsByPost(postId) {
  return {
    type: FETCH_POST,
    postId
  };
}

export const fetchPostCommentsAPI = postId => dispatch =>
  fetchPostComments(postId)
    .then(() => dispatch(fetchPostComments(postId)))
    .catch(error => dispatch(postError(error)));

export function createPostAction(postId, post) {
  return {
    type: CREATE_POST,
    postId,
    post
  };
}

export const createPostAPI = post => dispatch => {
  var newPostId = `${Math.random()}|${new Date()}`;
  var newPost = { ...post };
  newPost.id = newPostId;
  createPost(newPost)
    .then(post => {
      return { ...newPost, ...post };
    })
    .then(post => dispatch(createPostAction(newPostId, post)))
    .catch(error => dispatch(postError(error)));
};

export function editPostAction(post) {
  const postId = post.id || '';
  return {
    type: EDIT_POST,
    post,
    postId
  };
}

export const editPostAPI = post => dispatch =>
  editPost(post.id, post)
    .then(() => dispatch(editPostAction(post)))
    .catch(error => dispatch(postError(error)));

export function deletePostAction(postId) {
  return {
    type: DELETE_POST,
    postId
  };
}

export const deletePostAPI = postId => dispatch =>
  deletePost(postId)
    .then(() => dispatch(deletePostAction(postId)))
    .catch(error => dispatch(postError(error)));

export function upVotePost(postId) {
  return {
    type: UP_VOTE_POST,
    postId
  };
}

export const upVotePostAPI = postId => dispatch =>
  votePost(postId, { option: 'upVote' })
    .then(() => dispatch(upVotePost(postId)))
    .catch(error => dispatch(postError(error)));

export function downVotePost(postId) {
  return {
    type: DOWN_VOTE_POST,
    postId
  };
}

export const downVotePostAPI = postId => dispatch =>
  votePost(postId, { option: 'downVote' })
    .then(() => dispatch(downVotePost(postId)))
    .catch(error => dispatch(postError(error)));

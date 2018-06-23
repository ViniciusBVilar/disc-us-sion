export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';

export function createPost({ post }) {
  return {
    type: CREATE_POST,
    post,
  };
}

export function editPost({ post }) {
  const postId = post.id || '';
  return {
    type: EDIT_POST,
    post,
    postId,
  };
}

export function deletePost({ postId }) {
  return {
    type: DELETE_POST,
    postId,
  };
}

export function upVotePost({ postId }) {
  return {
    type: UP_VOTE_POST,
    postId,
  };
}

export function downVotePost({ postId }) {
  return {
    type: DOWN_VOTE_POST,
    postId,
  };
}

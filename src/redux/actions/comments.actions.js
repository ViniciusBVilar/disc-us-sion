import {
  getCommentDetails,
  createComment,
  deleteComment,
  editComment,
  voteComment } from '../../data/comments.data-source';

export const ERROR_COMMENT = 'ERROR_COMMENT';
export const FETCH_COMMENTS = 'ERROR_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_PARENT_COMMENT = 'DELETE_PARENT_COMMENT';
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';

export function errorComment(error) {
  return {
    type: ERROR_COMMENT,
    error,
  };
}

export function fetchCommentDetails({ posts }) {
  return {
    type: FETCH_COMMENTS,
    posts,
  };
}

export const fetchCommentDetailsAPI = () => dispatch => (
  getCommentDetails()
    .then(posts => dispatch(fetchCommentDetails({ posts })))
    .catch(error => dispatch(errorComment(error)))
);


export function createCommentAction({ comment }) {
  return {
    type: CREATE_COMMENT,
    comment
  };
}

export const createCommentAPI = comment => dispatch => (
  createComment(comment)
    .then(() => dispatch(createCommentAction({ comment })))
    .catch(error => dispatch(errorComment(error)))
);

export function editCommentAction({ comment }) {
  const commentId = comment.id || '';
  return {
    type: EDIT_COMMENT,
    comment,
    commentId,
  };
}

export const editCommentAPI = comment => dispatch => (
  editComment(comment)
    .then(() => dispatch(editCommentAction({ comment })))
    .catch(error => dispatch(errorComment(error)))
);

export function deleteCommentAction({ commentId }) {
  return {
    type: DELETE_COMMENT,
    commentId,
  };
}

export const deleteCommentAPI = commentId => dispatch => (
  deleteComment(commentId)
    .then(() => dispatch(deleteCommentAction({ commentId })))
    .catch(error => dispatch(errorComment(error)))
);

export function deleteCommentParent({ commentId }) {
  return {
    type: DELETE_PARENT_COMMENT,
    commentId,
  };
}

export function upVoteCommentAction({ commentId }) {
  return {
    type: UP_VOTE_COMMENT,
    commentId,
  };
}

export const upVoteCommentAPI = commentId => dispatch => (
  voteComment(commentId)
    .then(() => dispatch(upVoteCommentAction({ commentId })))
    .catch(error => dispatch(errorComment(error)))
);

export function downVoteCommentAction({ commentId }) {
  return {
    type: DOWN_VOTE_COMMENT,
    commentId,
  };
}

export const downVoteCommentAPI = commentId => dispatch => (
  voteComment(commentId)
    .then(() => dispatch(downVoteCommentAction({ commentId })))
    .catch(error => dispatch(errorComment(error)))
);

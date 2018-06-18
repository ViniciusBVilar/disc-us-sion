export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_PARENT_COMMENT = 'DELETE_PARENT_COMMENT';
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';

export function createComment({ comment }) {
  return {
    type: CREATE_COMMENT,
    comment
  };
}

export function editComment({ comment }) {
  return {
    type: EDIT_COMMENT,
    comment,
  };
}

export function deleteComment({ commentId }) {
  return {
    type: DELETE_COMMENT,
    commentId,
  };
}

export function deleteCommentParent({ commentId }) {
  return {
    type: DELETE_PARENT_COMMENT,
    commentId,
  };
}

export function upVoteComment({ commentId }) {
  return {
    type: UP_VOTE_COMMENT,
    commentId,
  };
}

export function downVoteComment({ commentId }) {
  return {
    type: DOWN_VOTE_COMMENT,
    commentId,
  };
}

import {
  CREATE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  DELETE_PARENT_COMMENT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  deleteCommentParent,
} from '../actions/comments.actions';
import { createComment, editComment, voteComment, deleteComment } from '../../data/comments.data-source';

// const categories =  'react' | 'redux' | 'udacity';
// id - UUID should be fine, but any unique id will work
// timestamp - timestamp in whatever format you like, you can use Date.now() if you like
// title - String
// body - String
// author - String
// category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.

const initialCommentsState = {
  'aaa': {
    id: 'aaa',
    parentId: '123',
    timestamp: new Date(),
    title: 'aaa_aaa_aaaa',
    body: 'baaa-aaa-vv-',
    author: 'caaa-aaavv',
    voteScore: 21,
    deleted: false,
    parentDeleted: false,
  },
  '213': {
    id: '213',
    parentId: '123',
    timestamp: new Date(),
    title: 'aaa_aaa_aaaa',
    body: 'baaa-aaa-vv-',
    author: 'caaa-aaavv',
    voteScore: 21,
    deleted: false,
    parentDeleted: false,
  },
  '214': {
    id: '214',
    parentId: '124',
    timestamp: new Date(),
    title: 'aaa_aaa_aaaa',
    body: 'baaa-aaa-vv-',
    author: 'caaa-aaavv',
    voteScore: 21,
    deleted: false,
    parentDeleted: false,
  }
};

export async function comments(state = initialCommentsState, action) {
  const { type, comment, commentId } = action;
  switch (type) {
  case CREATE_COMMENT:
    var newCommentId = `${Math.random()}|${new Date()}`;
    var newComment = comment;
    newComment.id = newCommentId;
    newComment.voteScore = 0;
    newComment.deleted = false;
    newComment.parentDeleted = false;
    try {
      await createComment(newComment);
      return {
        ...state,
        [newCommentId]: newComment
      };
    } catch(e) {
      return state;
    }
  case EDIT_COMMENT:
    var editedComment = {
      ...state[commentId],
      ...comment
    };
    try {
      await editComment(commentId, editedComment);
      return {
        ...state,
        [commentId]: editedComment
      };
    } catch(e) {
      return state;
    }
  case DELETE_COMMENT:
    try {
      await deleteComment(commentId);
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          'deleted': true
        }
      };
    } catch(e) {
      return state;
    }
  case DELETE_PARENT_COMMENT:
    try {
      await deleteCommentParent(commentId);
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          'parentDeleted': true
        }
      };
    } catch(e) {
      return state;
    }
  case UP_VOTE_COMMENT:
    try {
      await voteComment(commentId, 'upVote');
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          'voteScore': state[commentId]['voteScore'] + 1,
        }
      };
    } catch(e) {
      return state;
    }
  case DOWN_VOTE_COMMENT:
    try {
      await voteComment(commentId, 'downVote');
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          'voteScore': state[commentId]['voteScore'] - 1,
        }
      };
    } catch(e) {
      return state;
    }
  default:
    return state;
  }
}

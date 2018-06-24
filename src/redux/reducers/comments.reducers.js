import {
  CREATE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  DELETE_PARENT_COMMENT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
} from '../actions/comments.actions';

// const categories =  'react' | 'redux' | 'udacity';
// id - UUID should be fine, but any unique id will work
// timestamp - timestamp in whatever format you like, you can use Date.now() if you like
// title - String
// body - String
// author - String
// category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.

const initialCommentsState = {
  'aaa': {
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

export function comments(state = initialCommentsState, action) {
  const { type, comment, commentId } = action;
  switch (type) {
  case CREATE_COMMENT:
    var newCommentId = `${Math.random()}|${new Date()}`;
    var newComment = comment;
    newComment.id = newCommentId;
    return {
      ...state,
      [newCommentId]: newComment
    };
  case EDIT_COMMENT:
    return {
      ...state,
      [commentId]: {
        ...state[commentId],
        ...comment
      }
    };
  case DELETE_COMMENT:
    return {
      ...state,
      [commentId]: {
        ...state[commentId],
        'deleted': true
      }
    };
  case DELETE_PARENT_COMMENT:
    return {
      ...state,
      [commentId]: {
        ...state[commentId],
        'parentDeleted': true
      }
    };
  case UP_VOTE_COMMENT:
    return {
      ...state,
      [commentId]: {
        ...state[commentId],
        'voteScore': state[commentId]['voteScore'] + 1,
      }
    };
  case DOWN_VOTE_COMMENT:
    return {
      ...state,
      [commentId]: {
        ...state[commentId],
        'voteScore': state[commentId]['voteScore'] - 1,
      }
    };
  default:
    return state;
  }
}

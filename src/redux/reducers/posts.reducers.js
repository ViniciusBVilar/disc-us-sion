import {
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST
} from '../actions/post.actions';

// const categories =  'react' | 'redux' | 'udacity';
// id - UUID should be fine, but any unique id will work
// timestamp - timestamp in whatever format you like, you can use Date.now() if you like
// title - String
// body - String
// author - String
// category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.

const initialPostsState = {
  '123': {
    timestamp: '123',
    title: 'a',
    body: 'b',
    author: 'c',
    category: 'react',
    voteScore: 21,
    deleted: false,
  },
  '124': {
    timestamp: '124',
    title: 'a1',
    body: 'b1',
    author: 'c1',
    category: 'f1',
    voteScore: 22,
    deleted: true,
  }
};

export function posts(state = initialPostsState, action) {
  const { type, post, postId } = action;
  switch (type) {
  case CREATE_POST:
    return {
      ...state,
      [`${Math.random()}|${new Date()}`]: post
    };
  case EDIT_POST:
    return {
      ...state,
      [postId]: {
        ...state[postId],
        ...post
      }
    };
  case DELETE_POST:
    return {
      ...state,
      [postId]: {
        ...state[postId],
        'deleted': true
      }
    };
  case UP_VOTE_POST:
    return {
      ...state,
      [postId]: {
        ...state[postId],
        'voteScore': state[postId]['voteScore'] + 1,
      }
    };
  case DOWN_VOTE_POST:
    return {
      ...state,
      [postId]: {
        ...state[postId],
        'voteScore': state[postId]['voteScore'] - 1,
      }
    };
  default:
    return state;
  }
}
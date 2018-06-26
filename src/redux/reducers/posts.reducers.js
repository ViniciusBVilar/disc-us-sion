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
    id: '123',
    timestamp: `${new Date(220200000)}`,
    title: 'a',
    body: 'b',
    author: 'c',
    category: 'react',
    voteScore: 21,
    deleted: false,
  },
  '124': {
    id: '124',
    timestamp: `${new Date(99999999999)}`,
    title: 'a',
    body: 'b',
    author: 'c',
    category: 'react',
    voteScore: 21,
    deleted: false,
  },
  '125': {
    id: '125',
    timestamp: `${new Date()}`,
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
    var newPostId = `${Math.random()}|${new Date()}`;
    var newPost = post;
    newPost.id = newPostId;
    newPost.voteScore = 0;
    newPost.deleted = false;
    return {
      ...state,
      [newPostId]: newPost
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
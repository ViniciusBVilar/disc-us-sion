import {
  POST_ERROR,
  FETCH_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
} from '../actions/post.actions';


// const categories =  'react' | 'redux' | 'udacity';
// id - UUID should be fine, but any unique id will work
// timestamp - timestamp in whatever format you like, you can use Date.now() if you like
// title - String
// body - String
// author - String
// category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.

// const initialPostsState = {
//   '123': {
//     id: '123',
//     timestamp: `${new Date(220200000)}`,
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     category: 'udacity',
//     voteScore: 10,
//     deleted: false,
//   },
//   '124': {
//     id: '124',
//     timestamp: `${new Date(99999999999)}`,
//     title: 'aaasdsadasd',
//     body: 'basdsad',
//     author: 'casdsada',
//     category: 'react',
//     voteScore: 4,
//     deleted: false,
//   },
//   '125': {
//     id: '125',
//     timestamp: `${new Date()}`,
//     title: 'a1',
//     body: 'b1',
//     author: 'c1',
//     category: 'f1',
//     voteScore: 2,
//     deleted: false,
//   }
// };

export function posts(state = {}, action) {
  const { type, post, postId, posts, error } = action;
  switch (type) {
  case CREATE_POST:
    return {
      ...state,
      [postId]: post
    };
  case EDIT_POST:
    var editedPost = {
      ...state[postId],
      ...post
    };
    return {
      ...state,
      [postId]: editedPost
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
    debugger;
    return {
      ...state,
      [postId]: {
        ...state[postId],
        'voteScore': state[Object.keys(state).filter(key => state[key].id === postId)[0]].voteScore + 1,
        // 'voteScore': state[postId]['voteScore'] + 1,
      }
    };
  case DOWN_VOTE_POST:
    return {
      ...state,
      [postId]: {
        ...state[postId],
        'voteScore': state[Object.keys(state).filter(key => state[key].id === postId)[0]].voteScore - 1,
      }
    };
  case POST_ERROR:
    return {
      ...state,
      error
    };
  case FETCH_POST:
    return {...state,
      ...posts};
  default:
    return state;
  }
}
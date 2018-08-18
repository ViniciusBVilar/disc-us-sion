import {
  POST_ERROR,
  FETCH_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
} from '../actions/post.actions';

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
    return {
      ...state,
      [postId]: {
        ...state[postId],
        'voteScore': state[Object.keys(state).filter(key => state[key].id === postId)[0]].voteScore + 1 || 1,
      }
    };
  case DOWN_VOTE_POST:
    return {
      ...state,
      [postId]: {
        ...state[postId],
        'voteScore': state[Object.keys(state).filter(key => state[key].id === postId)[0]].voteScore - 1 || -1,
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
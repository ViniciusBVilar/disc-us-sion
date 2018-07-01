import {
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
} from '../actions/post.actions';
import { createPost, editPost, votePost, deletePost } from '../../data/posts.data-source';

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
    category: 'udacity',
    voteScore: 10,
    deleted: false,
  },
  '124': {
    id: '124',
    timestamp: `${new Date(99999999999)}`,
    title: 'aaasdsadasd',
    body: 'basdsad',
    author: 'casdsada',
    category: 'react',
    voteScore: 4,
    deleted: false,
  },
  '125': {
    id: '125',
    timestamp: `${new Date()}`,
    title: 'a1',
    body: 'b1',
    author: 'c1',
    category: 'f1',
    voteScore: 2,
    deleted: false,
  }
};

export async function posts(state = initialPostsState, action) {
  const { type, post, postId } = action;
  debugger
  switch (type) {
  case CREATE_POST:
    var newPostId = `${Math.random()}|${new Date()}`;
    var newPost = post;
    newPost.id = newPostId;
    newPost.voteScore = 0;
    newPost.deleted = false;

    try {
      await createPost(newPost);
      return {
        ...state,
        [newPostId]: newPost
      };
    } catch(e) {
      return state;
    }
  case EDIT_POST:
    var editedPost = {
      ...state[postId],
      ...post
    };
    try {
      await editPost(postId, editedPost).then(() => {}).catch(() => {});
      return {
        ...state,
        [postId]: editedPost
      };
    } catch(e) {
      return state;
    }
  case DELETE_POST:
    try {
      await deletePost(postId).then(() => {}).catch(() => {});
      return {
        ...state,
        [postId]: {
          ...state[postId],
          'deleted': true
        }
      };
    } catch(e) {
      return state;
    }
  case UP_VOTE_POST:
    try {
      debugger
      await votePost(postId, {option: 'upVote'}).then(() => {}).catch(() => {});
      debugger
      return {
        ...state,
        [postId]: {
          ...state[postId],
          'voteScore': state[postId]['voteScore'] + 1,
        }
      };
    } catch(e) {
      debugger
      return state;
    }
  case DOWN_VOTE_POST:
    try {
      debugger
      await votePost(postId, {option: 'downVote'}).then(() => {}).catch(() => {});
      return {
        ...state,
        [postId]: {
          ...state[postId],
          'voteScore': state[postId]['voteScore'] - 1,
        }
      };
    } catch(e) {
      return state;
    }
  default:
    return state;
  }
}
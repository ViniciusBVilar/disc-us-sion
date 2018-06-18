import { combineReducers } from 'redux';
import { posts } from './posts.reducers';
import { comments } from './comments.reducers';

export default combineReducers({
  comments,
  posts
});

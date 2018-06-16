export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR';

export function createPost({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal
  };
}

export function editPost({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal
  };
}

export function deletePost({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal
  };
}


export function upVotePost({ day, meal, recipe }) {
  return {
    type: ADD_RECIPE,
    day,
    meal,
    recipe
  };
}

export function downVotePost({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal
  };
}


export function commentPost({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal
  };
}


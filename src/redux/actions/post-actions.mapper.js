export const mapPosts = posts => {
  const postsObject = {};
  posts.forEach(post => {
    postsObject[post.id] = {...post};
  });
  return postsObject;
};
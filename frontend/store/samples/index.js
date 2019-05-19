import replies from './replies';
import posts from './posts';
import tags from './tags';
import teams from './teams';
import users from './users';

export const newReplies = replies.map(reply => {
  reply['user'] = users.find(user => user.id === reply.userId);
  return reply;
})

export const newPosts = posts.map(post => {
  post['user'] = users.find(user => user.id === post.userId);
  post['replies'] = newReplies.filter(reply => reply.postId === post.id);
  return post
});

export const newTags = tags.map(tag => {
  tag['users'] = users.filter(user => user.tagIds.includes(tag.id))
  return tag;
})

export const newUsers = users;

export const newTeams = teams;
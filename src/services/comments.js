import { comments as data } from "../data/comments";

//private
let comments = [...data];

export function getAllComments() {
  // get all comments
  return [...comments];
}

export function getCommentById(id) {
  //get comment by id
  return comments.find((comment) => comment.id === id);
}

export function getCommentsByPostId(postId) {
  //get comments by post id
  comments = comments.map((comment) =>{
    if(comment.postId === postId){
      console.log(comment);
      return comment;
    }
    return comment;
  });
}

export function updateCommentBody(id, body) {
  //update comment body
  comments = comments.map((comment) => {
    if (comment.id === id) {
      return {
        ...comment,
        ...body,
      };
    }

    return comment;
  });
}

export function deleteCommentById(id) {
  //delete comment by id
  comments = comments.map((comment) =>{
    if(comment.id === id){
      comments.splice(comment.id -1, 1);
      return comments;
    }
    return comment;
  });
}

export function addComment(comment) {
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
  comments.push(comment);
  return comments;
}

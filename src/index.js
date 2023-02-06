//Call all functions inside services and log updated value/s
import {
  updateUser,
  getAllUsers,
  getUserById,
  addUser,
} from "./services/users";
import {
  getCommentById,
  getCommentsByPostId,
  updateCommentBody,
  deleteCommentById,
  addComment,
  getAllComments,
} from "./services/comments";
import {
  addPost,
  getPostById,
  getPosts,
  updatePostTitle,
  updatePostBody,
  deletePostBy,
  deletePostsByUserId,
  getPostsByUser
} from "./services/posts";

// * User Services
console.log("User Services");

// TODO GET ALL USERS
console.log("Get all users");
console.log(getAllUsers());

// TODO GET USER
console.log("Get user by id");
console.log(getUserById(1));

// TODO UPDATE USER
console.log("Update user");
updateUser(1, { email: "roger@77.com" });
console.log(getUserById(1));

// TODO ADD USER
console.log("Add user");
const newUserData = {
  name: "Sana Minatozaki",
  username: "SanaMin",
  email: "SanaMin@karina.biz",
  address: {
    street: "Liberty Street",
    suite: "Suite 198",
    city: "Osaka",
    zipcode: "31428-2261",
    geo: {
      lat: "-38.2386",
      lng: "57.2232",
    },
  },
  phone: "024-648-3804",
  website: "SanaM.net",
  company: {
    name: "Twice JYP",
    catchPhrase: "One in a million",
    bs: "target end-to-end models",
  },
};

function generateId() {
  const id = getAllUsers().length + 1;
  const userData = { id, ...newUserData };
  return userData;
}
console.log(addUser(generateId()));

// * Comment Services
console.log("Comment Services");

// TODO GET COMMENT BY ID
console.log("Get comment by id");
console.log(getCommentById(1));

// TODO GET COMMENT BY POSTID
console.log("Get comments by postId");
getCommentsByPostId(1);

// TODO UPDATE COMMENT BY ID
console.log("Update comment");
updateCommentBody(1, { body: "Updated Data!" });
console.log(getCommentById(1));

// TODO DELETE COMMENT BY ID
console.log("Delete comment");
deleteCommentById(1);
console.log(getAllComments());

// TODO ADD COMMENT
console.log("Add comment");
const newComment = {
  name: "Sana Minatozaki",
  email: "SanaMin@gardner.biz",
  body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
};

function generateCommentId() {
  const id = getAllComments().length + 1;
  return id;
}

function generatePostId({ postId }) {
  const pId = postId + 1;
  return pId;
}

function completeComment() {
  const pId = generatePostId(getCommentById(getAllComments().length - 1));
  const id = generateCommentId();
  const commentData = { pId, id, ...newComment };
  return commentData;
}
console.log(addComment(completeComment()));

// * Post Services
console.log("Post Services");

// TODO GET ALL POSTS
console.log("Get all posts");
console.log(getPosts());

// TODO GET ALL POST BY USERID
console.log("Get All posts by id");
getPostsByUser(2);

// TODO GET POST BY ID
console.log("Get post by id");
console.log(getPostById(1));

// TODO ADD POST
console.log("Add post");
const newPost = {
  title: "Sana Minatozaki",
  body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
};

function generatePId() {
  const id = getPosts().length + 1;
  return id;
}

function generateUserId({ userId }) {
  const uId = userId + 1;
  return uId;
}

function completePost() {
  const uId = generateUserId(getPostById(getPosts().length - 1));
  const id = generatePId();
  const commentData = { uId, id, ...newPost };
  return commentData;
}
console.log(addPost(completePost()));

// TODO UPDATE POST BY ID AND TITLE
console.log("Update Post Title");
updatePostTitle(1, { title: "Updated Title!" });
console.log(getPostById(1));

// TODO UPDATE POST BY ID AND BODY
console.log("Update Post Body");
updatePostBody(1, { body: "Updated Data!" });
console.log(getPostById(1));

// TODO UPDATE POST FOR BOTH BODY AND/OR TITLE
console.log("Update Post");
const choice1 = "title";
if (choice1 === "title") {
  updatePostTitle(1, { title: "Updated Title!" });
  console.log(getPostById(1));
} else {
  updatePostBody(1, { body: "Updated Data!" });
  console.log(getPostById(1));
}

// TODO DELETE POST BY ID
console.log("Delete Post");
deletePostBy(1);
console.log(getPosts());

// TODO DELETE ALL POST BY ID
console.log("Delete All Posts");
deletePostsByUserId(1);
console.log(getPosts());
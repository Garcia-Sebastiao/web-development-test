import accountLogin from "./core/accountLogin";
import accountSignUp from "./core/accountSignUp";
import createBook from "./core/author/createBook";
import deleteBook from "./core/author/deleteBook";
import getAuthorBooks from "./core/author/getAuthorBooks";
import updateBook from "./core/author/updateBook";
import createComment from "./core/createComment";
import deleteLike from "./core/deleteLike";
import getBook from "./core/getBookById";
import getBookByTitle from "./core/getBookByTitle";
import getComments from "./core/getComments";
import getLikes from "./core/getLikes";
import getUser from "./core/getUser";
import getUserLike from "./core/getUserLike";
import setLike from "./core/setLike";
import getBooks from "./core/visitor/getBooks";

const useHttp = () => {
  // localhost:3000/login
  async function login(data) {
    return await accountLogin(data);
  }
  // localhost:3000/books
  async function viewBooks() {
    return await getBooks();
  }

  async function createAccount(data) {
    return await accountSignUp(data);
  }

  async function viewUser(id) {
    return await getUser(id);
  }

  async function searchBook(query) {
    return await getBookByTitle(query);
  }

  async function postBook(data) {
    return await createBook(data);
  }

  async function viewBook(id) {
    return await getBook(id);
  }

  async function editBook(id, data) {
    return await updateBook(id, data);
  }

  async function viewAuthorBooks(id) {
    return await getAuthorBooks(id);
  }

  async function removeBook(id) {
    return await deleteBook(id);
  }
  async function commentBook(data) {
    return await createComment(data);
  }

  async function viewComments(id) {
    return await getComments(id);
  }

  async function likeBook(data) {
    return await setLike(data);
  }

  async function viewLikes(id) {
    return await getLikes(id);
  }

  async function viewUserLike(userId, bookId) {
    return await getUserLike(userId, bookId);
  }

  async function removeLike(userId, bookId) {
    return await deleteLike(userId, bookId);
  }

  return {
    login,
    createAccount,
    viewBooks,
    viewBook,
    searchBook,
    postBook,
    editBook,
    viewAuthorBooks,
    removeBook,
    createComment,
    viewComments,
    commentBook,
    viewUser,
    likeBook,
    viewLikes,
    viewUserLike,
    removeLike,
  };
};

export default useHttp;

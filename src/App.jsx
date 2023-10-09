import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/Auth/Signin";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import InboxMessage from "./pages/Auth/InboxMessage";
import Main from "./pages/System/Main";
import StoreProfile from "./pages/System/Profile/StoreProfile";
import AuthorProfile from "./pages/System/Profile/AuthorProfile";
import Books from "./pages/System/Books/Books";
import SearchResults from "./pages/System/Search/SearchResults";
import AddBook from "./pages/System/Books/AddBook";
import VisitorAuthorProfile from "./pages/System/Visitor/Profile/VisitorAuthorProfile";
import VisitorStoreProfile from "./pages/System/Visitor/Profile/VisitorStoreProfile";
import ReadBook from "./pages/System/Books/ReadBook";
import PrivateRoutes from "./routes/PrivateRoutes";
import AuthorRoute from "./routes/AuthorRoute";
import MyBooks from "./pages/System/Profile/MyBooks";
import EditBook from "./pages/System/Books/EditBook";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/sign_in" element={<SignIn />} />
      <Route path="/auth/sign_up" element={<SignUp />} />
      <Route path="/auth/forgot_password" element={<ForgotPassword />} />
      <Route path="/auth/inbox_message" element={<InboxMessage />} />

      {/** System */}
      <Route
        path="/system/main"
        element={
          <PrivateRoutes>
            <Main />
          </PrivateRoutes>
        }
      />

      {/* Profile */}
      <Route path="/system/profile/store_profile" element={<StoreProfile />} />
      <Route
        path="/system/profile/author_profile"
        element={<AuthorProfile />}
      />

      {/* Books */}
      <Route
        path="/system/books"
        element={
          <PrivateRoutes>
            <Books />
          </PrivateRoutes>
        }
      />
      <Route
        path="/system/books/add_book"
        element={
          <PrivateRoutes>
            <AuthorRoute>
              <AddBook />
            </AuthorRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/system/books/edit_book/:book_id"
        element={
          <PrivateRoutes>
            <AuthorRoute>
              <EditBook />
            </AuthorRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/system/profile/my_books"
        element={
          <PrivateRoutes>
            <AuthorRoute>
              <MyBooks />
            </AuthorRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/system/books/read_book/:book_id"
        element={
          <PrivateRoutes>
            <ReadBook />
          </PrivateRoutes>
        }
      />

      {/* Search Results */}
      <Route
        path="/system/search/:search_value"
        element={
          <PrivateRoutes>
            <SearchResults />
          </PrivateRoutes>
        }
      />

      {/* Visitor */}
      <Route
        path="/system/visitor/author_profile"
        element={<VisitorAuthorProfile />}
      />
      <Route
        path="/system/visitor/store_profile"
        element={<VisitorStoreProfile />}
      />
    </Routes>
  );
}

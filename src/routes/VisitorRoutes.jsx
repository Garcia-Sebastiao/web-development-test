import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Auth/SignIn";
import SignIUp from "../pages/Auth/SignUp";
import Main from "../pages/System/Main";
import Books from "../pages/System/Books/Books";
import SearchResults from "../pages/System/Search/SearchResults";
import ReadBook from "../pages/System/Books/ReadBook";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import InboxMessage from "../pages/Auth/InboxMessage";

export default function VisitorRoutes() {
  return <Routes></Routes>;
}

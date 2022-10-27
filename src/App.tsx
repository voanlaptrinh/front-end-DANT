import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signupcandidate from "./pages/candidate/Signupcandidate";
import Signupemployer from "./pages/employer/Signupemployer";
import Pickpassword from "./pages/Pickpassword";
import AdminLayout from "./layout/AdminLayout/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Post from "./pages/Admin/Post";
import News from "./pages/Admin/Post/News";
import PostAdd from "./pages/Admin/Post/Post-Add";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./layout/candidate/Layout";
import Search from "./pages/candidate/Search";
import "./css/plugins/bootstrap.min.css";
import Profile from "./pages/employer/Profile/Profile";
import Edit from "./pages/Admin/Post/Edit";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Default-Layout */}
          <Route path="product" element={<Layout />}>
            <Route path="detail" element={<Detail />} />
            <Route path="search" element={<Search />} />
            <Route path="profile/:id" element={<Profile />} />
          </Route>
          {/* Admin-Layout */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="post">
              <Route index element={<Post />} />
              <Route path="news" element={<News />} />
              <Route path="add" element={<PostAdd />} />
              <Route path="edit/:id" element={<Edit />} />
            </Route>
          </Route>
          {/* Auth-page */}
          <Route path="/login/signupcandidate" element={<Signupcandidate />} />
          <Route path="/login/signupempoly" element={<Signupemployer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Pickpassword" element={<Pickpassword />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

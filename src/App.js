import Login from "./auth/Login";
import MyHistory from "./farmer/MyHistory";
import HomePage from "./pages/HomePage";
import CropInfo from "./pages/CropInfo";
import Register from "./auth/Register";
import AutoRecommend from "./farmer/AutoRecommend";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import FarmerDashboard from "./farmer/FarmerDashboard";
import AdminDashboard from "./admin/AdminDashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import AllHistory from "./admin/AllHistory";
import Footer from "./pages/Footer"; // ✅ FIXED
import ChatBot from "./components/Chatbot";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";   // ✅ ADD THIS
import api from "./api/api";         // ✅ ADD THIS


function App() {

   useEffect(() => {
    api.get("/api/health").catch(() => {});
  }, []);

  // const token = localStorage.getItem("token");
  // const path = window.location.pathname;
  const token = localStorage.getItem("token");
  const path = window.location.pathname;

  

  // ✅ ABOUT PAGE (PUBLIC)
  if (path === "/about") {
    return (
      <>
        <About />
        <ChatBot />
        <Footer />
      </>
    );
  }

  // ✅ CONTACT PAGE (PUBLIC)
  if (path === "/contact") {
    return (
      <>
        <Contact />
        <ChatBot />
        <Footer />
      </>
    );
  }

  // ✅ TERMS PAGE (PUBLIC)
  if (path === "/terms") {
    return (
      <>
        <Terms />
        <ChatBot />
        <Footer />
      </>
    );
  }

  // 🌐 PUBLIC ROUTES
  if (!token) {
    if (path === "/") {
      return (
        <>
          <HomePage />
          <ChatBot />
          <Footer />
        </>
      );
    }

    if (path === "/login") {
      return (
        <>
          <Login />
          <ChatBot />
          <Footer />
        </>
      );
    }

    if (path === "/register") {
      return (
        <>
          <Register />
          <ChatBot />
          <Footer />
        </>
      );
    }

    if (path === "/forgot-password") {
      return (
        <>
          <ForgotPassword />
          <ChatBot />
          <Footer />
        </>
      );
    }

    if (path === "/reset-password") {
      return (
        <>
          <ResetPassword />
          <ChatBot />
          <Footer />
        </>
      );
    }

    if (path === "/crop-info") {
      return (
        <>
          <CropInfo />
          <ChatBot />
          <Footer />
        </>
      );
    }

    return (
      <>
        <HomePage />
        <ChatBot />
        <Footer />
      </>
    );
  }

  // 🔐 LOGGED IN
  const { role } = jwtDecode(token);

  // ✅ FIX: Home should still open HomePage after login
  if (path === "/") {
    return (
      <>
        <HomePage />
        <ChatBot />
        <Footer />
      </>
    );
  }

  if (path === "/crop-info") {
    return (
      <>
        <CropInfo />
        <ChatBot />
        <Footer />
      </>
    );
  }

  if (path === "/my-history") {
    return (
      <>
        <MyHistory />
        <ChatBot />
        <Footer />
      </>
    );
  }

  if (path === "/admin-history") {
    return (
      <>
        <AllHistory />
        <ChatBot />
        <Footer />
      </>
    );
  }

  return (
    <>
      {role === "ADMIN" ? <AdminDashboard /> : <FarmerDashboard />}
      <ChatBot />
      <Footer />
    </>
  );
}

<div className="app-wrapper">
  <div className="page-content">
    <AutoRecommend />
  </div>
  <Footer />
</div>

export default App;

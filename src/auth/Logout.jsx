// import "./Logout.css"
// function Logout() {
//   const logout = () => {
//     localStorage.clear();
//     window.location.reload();
//   };

//   return (
//     <button
//       className="btn btn-outline-light btn-sm logout-btn"
//       onClick={logout}
//     >
//       Logout
//     </button>
//   );
// }

// export default Logout;
import "./Logout.css";

function Logout() {
  const logout = () => {
    // 🔹 सगळं auth data clear
    localStorage.clear();

    // 🔹 homepage ला redirect
    window.location.href = "/";
  };

  return (
    <button
      className="btn btn-outline-light btn-sm logout-btn"
      onClick={logout}
    >
      Logout
    </button>
  );
}

export default Logout;

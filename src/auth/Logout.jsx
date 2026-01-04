function Logout() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <button className="btn btn-outline-light btn-sm" onClick={logout}>
      Logout
    </button>
  );
}

export default Logout;

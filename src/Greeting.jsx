function Greeting({ username, logout }) {
  return (
    <div>
      <h1>Welcome, {username}!</h1>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Greeting;
import { useState } from "react";
import Greeting from "./Greeting";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <Greeting username={username} logout={handleLogout} />
      ) : (
        <>
          <h1>Login</h1>

          <form onSubmit={handleLogin}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label>Password:</label>
              <input type="password" />
            </div>

            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
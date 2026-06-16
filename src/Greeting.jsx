import { useState } from "react";

function GithubSearch() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchUser = async () => {
    if (!username) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
      setUser(null);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1>GitHub User Search</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
          }}
        />

        <button
          onClick={searchUser}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      {loading && <h3>Loading...</h3>}

      {error && (
        <h3 style={{ color: "red" }}>
          {error}
        </h3>
      )}

      {user && (
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            width="150"
            style={{
              borderRadius: "50%",
              marginBottom: "15px",
            }}
          />

          <h2>{user.name}</h2>
          <p>@{user.login}</p>

          <p>
            <strong>Location:</strong>{" "}
            {user.location || "N/A"}
          </p>

          <p>
            <strong>Followers:</strong>{" "}
            {user.followers}
          </p>

          <p>
            <strong>Following:</strong>{" "}
            {user.following}
          </p>

          <p>
            <strong>Public Repos:</strong>{" "}
            {user.public_repos}
          </p>

          <p>
            <strong>Bio:</strong>{" "}
            {user.bio || "No bio available"}
          </p>

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default GithubSearch;
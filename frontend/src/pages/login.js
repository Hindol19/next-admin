// pages/login.js
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        username,
        password,
      });
      console.log(response.data);
      // Save token to localStorage or cookie
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);
      router.push("/");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="uppercase text-4xl text-light font-semibold my-10">
        WELCOME
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-primary rounded-xl w-[700px] py-12 px-10 flex flex-col items-center"
      >
        <div className="mb-10 flex flex-row justify-center text-light">
          <label className="mx-3">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="text-dark"
          />
        </div>
        <div className="mb-10 flex flex-row justify-center text-light">
          <label className="mx-3">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-dark"
          />
        </div>
        <button
          type="submit"
          className="bg-light text-xl font-bold px-8 py-2 rounded-md"
        >
          Login
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

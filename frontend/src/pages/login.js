import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/test-cors")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("CORS error:", error);
  //     });
  // }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });
      console.log(response);
      localStorage.setItem("token", response.data.token);
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className=" w-full h-[100vh] flex items-center justify-center">
      <div className="w-[60%] h-[80%] bg-light rounded-md ">
        <form className="flex flex-col items-center" onSubmit={handleLogin}>
          <input
            type="email"
            className="my-3 w-[70%]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="my-3 w-[70%]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" className="bg-light">
            Log In
          </button>
        </form>
      </div>
    </div>
    // <div>
    //   <h1>Login</h1>
    //   <form onSubmit={handleLogin}>
    //     <input
    //       type="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       placeholder="Email"
    //       required
    //     />
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       placeholder="Password"
    //       required
    //     />
    //     <button type="submit" className="bg-light">
    //       Login
    //     </button>
    //   </form>
    // </div>
  );
};

export default LoginPage;

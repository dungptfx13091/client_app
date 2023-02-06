import "./login.css";
import Footer from "../../components/footer/Footer";

import Navbar from "../../components/navbar/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h1>Login</h1>
        <form action="/login" method="POST">
          <label htmlFor="userName">Username</label>
          <input type="text" name="userName" id="userName" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />

          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

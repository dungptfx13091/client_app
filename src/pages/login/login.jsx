import "./login.css";
import Footer from "../../components/footer/Footer";

import Navbar from "../../components/navbar/Navbar";
import { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      signup: "hidden",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        console.log(res.json);
        return res.json();
      })
      .then((data) => {
        if (data.login === true) {
          this.setState({ signup: "hidden" });
          window.localStorage.setItem("loginEmail", data.email);
          window.location.href = "/";
        } else {
          this.setState({ signup: "visible" });
        }
      });
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <h1>Login</h1>
          <form action="/login" method="POST" onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />

            <p
              style={{
                visibility: this.state.signup,
                marginTop: "-6px",
                paddingBottom: "6px",
                fontSize: 12.6,
                color: "red",
              }}
            >
              Email or password not correct .Try again or{" "}
              <span>
                <a href="/register">sign up</a>
              </span>{" "}
            </p>

            <button type="submit">Login</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;

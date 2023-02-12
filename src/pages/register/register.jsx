import "./register.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Component } from "react";
import { da } from "date-fns/locale";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      isAdmin: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { userName, password, fullName, phoneNumber, email, isAdmin } =
      this.state;
    console.log(userName, password, fullName, phoneNumber, email, isAdmin);

    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userName,
        password,
        fullName,
        phoneNumber,
        email,
        isAdmin,
      }),
    })
      .then((res) => {
        console.log(res.json());
        return res.json;
      })
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <h1>Sign Up</h1>
          <form action="/register" method="POST" onSubmit={this.handleSubmit}>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={(e) => {
                this.setState({ userName: e.target.value });
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

            <label htmlFor="fullName">Fullname</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              onChange={(e) => {
                this.setState({ fullName: e.target.value });
              }}
            />

            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              onChange={(e) => {
                this.setState({ phoneNumber: e.target.value });
              }}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />

            <button type="submit">Create Account</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;

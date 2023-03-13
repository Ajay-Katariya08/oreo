import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [id, setId] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", login.email);
    formData.append("password", login.password);

    axios
      .post("http://localhost/oreo/admin_login.php", login)
      .then(function (response) {
        console.log(response);
        // setId(response.data.id)
        // alert("ID == " + response.data.id)

        if (
          response.data.email == login.email &&
          response.data.password == login.password
        ) {
          alert("Your data is currected...!");
          window.localStorage.setItem("id", response.data.id);
          window.location.href = "/Admin";
        } else {
          alert("Please, Check your data...!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const formInfo = (i) => {
    let targetName, targetValue;
    targetName = i.target.name;
    targetValue = i.target.value;

    setLogin({ ...login, [targetName]: targetValue });
  };
  return (
    <>
      <body className="theme-cyan authentication sidebar-collapse">
        <Header />
        {/* <!-- End Navbar --> */}
        <div className="page-header bg_img">
          <div class="page-header-image"></div>
          <div className="container">
            <div className="col-md-12 content-center">
              {" "}
              <div className="card-plain">
                <form class="form" method="" action="#">
                  <div className="header">
                    <div className="logo-container">
                      <img
                        src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg"
                        alt=""
                      ></img>
                    </div>
                    <h5>Log in</h5>
                  </div>
                  <div className="content">
                    <div className="input-group">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeHolder="Enter User email"
                        onChange={formInfo}
                      ></input>
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-account-circle"></i>
                      </span>
                    </div>
                    <div className="input-group">
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="form-control"
                        onChange={formInfo}
                      />
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="footer text-center">
                    <a
                      href="index.html"
                      className="btn btn-primary btn-round btn-block"
                      onClick={formSubmit}
                    >
                      SIGN IN
                    </a>
                    <h5>
                      <a href="forgot-password.html" className="link">
                        Forgot Password?
                      </a>
                    </h5>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </>
  );
}
export default Login;

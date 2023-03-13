import Header from "./Header";
import Sidebar from "../Sidebar";
import { useState } from "react";
import axios from "axios";
import '../../assets3/plugins/dropzone/dropzone';
function Add_doctor() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [speciality, setspeciality] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [url, seturl] = useState("");
  const [image, setimage] = useState("");
  const [wish, setwish] = useState("");

  function Add_data() {
    axios
      .post("http://localhost/oreo/Add_doctor.php", {
        Fname,
        Lname,
        dob,
        gender,
        speciality,
        phone,
        email,
        url,
        image,
        wish,
      })
      .then(function (response) {
        console.log(response.data);
        window.location.reload(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Sidebar />
      <Header />
      <div className="chat-launcher"></div>
      <div className="chat-wrapper">
        <div className="card">
          <div className="header">
            <ul className="list-unstyled team-info margin-0">
              <li className="m-r-15">
                <h2>Dr. Team</h2>
              </li>
              <li>
                <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
              </li>
              <li>
                <img src="../assets/images/xs/avatar3.jpg" alt="Avatar" />
              </li>
              <li>
                <img src="../assets/images/xs/avatar4.jpg" alt="Avatar" />
              </li>
              <li>
                <img src="../assets/images/xs/avatar6.jpg" alt="Avatar" />
              </li>
              <li>
                <a href="javascript:void(0);" title="Add Member">
                  <i className="zmdi zmdi-plus-circle"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="body">
            <div className="chat-widget">
              <ul className="chat-scroll-list clearfix">
                <li className="left float-left">
                  <img
                    src="../assets/images/xs/avatar3.jpg"
                    class="rounded-circle"
                    alt=""
                  ></img>
                  <div className="chat-info">
                    <a class="name" href="#">
                      Alexander
                    </a>
                    <span className="datetime">6:12</span>
                    <span className="message">Hello, John </span>
                  </div>
                </li>
                <li className="right">
                  <div className="chat-info">
                    <span class="datetime">6:15</span>{" "}
                    <span class="message">
                      Hi, Alexander
                      <br /> How are you!
                    </span>{" "}
                  </div>
                </li>
                <li className="right">
                  <div className="chat-info">
                    <span class="datetime">6:16</span>{" "}
                    <span class="message">
                      There are many variations of passages of Lorem Ipsum
                      available
                    </span>{" "}
                  </div>
                </li>
                <li class="left float-left">
                  {" "}
                  <img
                    src="../assets/images/xs/avatar2.jpg"
                    class="rounded-circle"
                    alt=""
                  ></img>
                  <div className="chat-info">
                    {" "}
                    <a class="name" href="#">
                      Elizabeth
                    </a>{" "}
                    <span class="datetime">6:25</span>{" "}
                    <span class="message">
                      Hi, Alexander,
                      <br /> John <br /> What are you doing?
                    </span>{" "}
                  </div>
                </li>
                <li class="left float-left">
                  {" "}
                  <img
                    src="../assets/images/xs/avatar1.jpg"
                    class="rounded-circle"
                    alt=""
                  />
                  <div className="chat-info">
                    {" "}
                    <a class="name" href="#">
                      Michael
                    </a>{" "}
                    <span class="datetime">6:28</span>{" "}
                    <span class="message">I would love to join the team.</span>{" "}
                  </div>
                </li>
                <li className="right">
                  <div className="chat-info">
                    <span class="datetime">7:02</span>{" "}
                    <span class="message">
                      Hello, <br />
                      Michael
                    </span>{" "}
                  </div>
                </li>
              </ul>
            </div>
            <div className="input-group p-t-15">
              <input
                type="text"
                class="form-control"
                placeHolder="Enter text here..."
              ></input>
              <span className="input-group-addon">
                <i className="zmdi zmdi-mail-send"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <body class="theme-cyan">
        {/* <!-- Page Loader --> */}
    
        {/* <!-- Overlay For Sidebars --> */}
        {/* <div class="overlay"></div> */}
        <section class="content">
          <div class="block-header">
            <div class="row">
              <div class="col-lg-7 col-md-5 col-sm-12">
                <h2>
                  Add Doctors
                  <small class="text-muted">Welcome to Oreo</small>
                </h2>
              </div>
              <div class="col-lg-5 col-md-7 col-sm-12">
                <button
                  class="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10"
                  type="button"
                >
                  <i class="zmdi zmdi-plus"></i>
                </button>
                <ul class="breadcrumb float-md-right">
                  <li class="breadcrumb-item">
                    <a href="Admin">
                      <i class="zmdi zmdi-home"></i> Oreo
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="javascript:void(0);">Doctors</a>
                  </li>
                  <li class="breadcrumb-item active">Add Doctors</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row clearfix">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="card">
                  <div class="header">
                    <h2>
                      <strong>Basic</strong> Information{" "}
                      <small>Description text here...</small>{" "}
                    </h2>
                    <ul class="header-dropdown">
                      <li class="remove">
                        <a role="button" class="boxs-close">
                          <i class="zmdi zmdi-close"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <form method="POST" class="body">
                    <div class="row clearfix">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="fname"
                            onChange={(e) => setFname(e.target.value)}
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            onChange={(e) => setLname(e.target.value)}
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row clearfix">
                      <div class="col-sm-3">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            onChange={(e) => setdob(e.target.value)}
                            placeholder="Date of Birth"
                          />
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <select
                          class="form-control show-tick"
                          value={gender}
                          onChange={(e) => setgender(e.target.value)}
                        >
                          <option value="">- Gender -</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            onChange={(e) => setspeciality(e.target.value)}
                            placeholder="Speciality"
                          />
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            onChange={(e) => setphone(e.target.value)}
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            onChange={(e) => setemail(e.target.value)}
                            placeholder="Enter Your Email"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            onChange={(e) => seturl(e.target.value)}
                            placeholder="Website URL"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <form
                          action="https://thememakker.com/"
                          id="frmFileUpload"
                          class="dropzone"
                          method="post"
                          enctype="multipart/form-data"
                        >
                          <div class="dz-message">
                            <div class="drag-icon-cph">
                              {" "}
                              <i class="material-icons">touch_app</i>{" "}
                            </div>
                            <h3>Drop files here or click to upload.</h3>
                            <em>
                              (This is just a demo dropzone. Selected files are{" "}
                              <strong>not</strong> actually uploaded.)
                            </em>{" "}
                          </div>
                          <div class="fallback">
                            <input
                              name="file"
                              type="file"
                              onChange={(e) => setimage(e.target.value)}
                              multiple
                            />
                          </div>
                        </form>
                      </div>
                      <div class="col-sm-12">
                        <div class="form-group">
                          <textarea
                            rows="4"
                            class="form-control no-resize"
                            onChange={(e) => setwish(e.target.value)}
                            placeholder="Please type what you want..."
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <button type="submit" onClick={Add_data} class="btn btn-primary btn-round">
                          Submit
                        </button>
                        <button
                          type="submit"
                          class="btn btn-default btn-round btn-simple"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="row clearfix">
              <div class="col-md-12">
                <div class="card">
                  <div class="header">
                    <h2>
                      <strong>Doctor's</strong> Account Information{" "}
                      <small>Description text here...</small>{" "}
                    </h2>
                    <ul class="header-dropdown">
                      <li class="remove">
                        <a role="button" class="boxs-close">
                          <i class="zmdi zmdi-close"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="body">
                    <div class="row clearfix">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="User Name"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <button type="submit" class="btn btn-primary btn-round">
                          Submit
                        </button>
                        <button
                          type="submit"
                          class="btn btn-default btn-round btn-simple"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row clearfix">
              <div class="col-md-12">
                <div class="card">
                  <div class="header">
                    <h2>
                      <strong>Doctor</strong> Social Media Info{" "}
                      <small>Description text here...</small>{" "}
                    </h2>
                    <ul class="header-dropdown">
                      <li class="remove">
                        <a role="button" class="boxs-close">
                          <i class="zmdi zmdi-close"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="body">
                    <div class="row clearfix">
                      <div class="col-sm-6">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="zmdi zmdi-facebook"></i>
                          </span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Facebook"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="zmdi zmdi-twitter"></i>
                          </span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Twitter"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="zmdi zmdi-google-plus"></i>
                          </span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Google Plus"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="zmdi zmdi-linkedin"></i>
                          </span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="LinkedIN"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="zmdi zmdi-behance"></i>
                          </span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Behance"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="zmdi zmdi-dribbble"></i>
                          </span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="dribbble"
                          />
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <p>
                          {" "}
                          <b>With Search Bar</b>{" "}
                        </p>
                        <select
                          class="form-control z-index show-tick"
                          data-live-search="true"
                        >
                          <option>Hot Dog, Fries and a Soda</option>
                          <option>Burger, Shake and a Smile</option>
                          <option>Sugar, Spice and all things nice</option>
                        </select>
                        <button type="submit" class="btn btn-primary btn-round">
                          Submit
                        </button>
                        <button
                          type="submit"
                          class="btn btn-default btn-round btn-simple"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
export default Add_doctor;

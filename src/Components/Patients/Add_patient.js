import Header from "../Doctors/Header";
import Sidebar from "../Sidebar";
import { useState } from "react";
import axios from "axios";

function Add_patient()
{
    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [phone, setphone] = useState("");
    const [date, setdate] = useState("");
    const [age,setage] = useState("");
    const [gender, setgender] = useState("");
    const [email, setemail] = useState("");
    const [image, setimage] = useState("");
    const [description, setdescription] = useState("");
    function submit_data() {
        axios
          .post("http://localhost/oreo/Add_patient.php", {
            Fname,
            Lname,
            phone,
            date,
            age,
            gender,
            email,
            image,
            description,
          })
          .then(function (response) {
            console.log(response.data);
            window.location.reload(false);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    return(
        <>
        <body class="theme-cyan">
            <Sidebar/>
            <Header/>
<section className="content">
    <div className="block-header">
        <div className="row">
            <div className="col-lg-7 col-md-5 col-sm-12">
                <h2>Add Patient
                <small className="text-muted">Welcome to Oreo</small>
                </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">               
                <ul className="breadcrumb float-md-right">
                    <li className="breadcrumb-item"><a href="index.html"><i class="zmdi zmdi-home"></i> Oreo</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">Patient</a></li>
                    <li className="breadcrumb-item active">Add Patient</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="card">
                    <div className="header">
                        <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>
                        <ul className="header-dropdown">
                            <li className="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more"></i> </a>
                                <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                    <li><a href="javascript:void(0);">Edit</a></li>
                                    <li><a href="javascript:void(0);">Delete</a></li>
                                    <li><a href="javascript:void(0);">Report</a></li>
                                </ul>
                            </li>
                            <li className="remove">
                                <a role="button" className="boxs-close"><i class="zmdi zmdi-close"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="row clearfix">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="text" class="form-control"  onChange={(e) => setFname(e.target.value)}  placeHolder="First Name" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="text" class="form-control" onChange={(e) => setLname(e.target.value)} placeHolder="Last Name" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="text" class="form-control" onChange={(e) => setphone(e.target.value)} placeHolder="Phone No." />
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">                            
                            <div className="col-sm-3">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="zmdi zmdi-calendar"></i>
                                    </span>
                                    <input type="text" class="form-control" onChange={(e) => setdate(e.target.value)} placeHolder="Enter date" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <input type="text" class="form-control" onChange={(e) => setage(e.target.value)} placeHolder="Age" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <select className="form-control show-tick" onChange={(e) => setgender(e.target.value)}>
                                    <option value="">- Gender -</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>                            
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <input type="text" class="form-control" onChange={(e) => setemail(e.target.value)} placeHolder="Enter Your Email" />
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <form action="https://thememakker.com/" id="frmFileUpload" class="dropzone" method="post" enctype="multipart/form-data">
                                    <div className="dz-message">
                                        <div className="drag-icon-cph"> <i class="material-icons">touch_app</i> </div>
                                        <h3>Drop files here or click to upload.</h3>
                                        <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                                    <div className="fallback">
                                        <input name="file" type="file" onChange={(e) => setimage(e.target.value)} multiple />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row clearfix">                            
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <textarea rows="4" class="form-control no-resize" onChange={(e) => setdescription(e.target.value)} placeHolder="Description"></textarea>
                                </div>
                            </div>
                           <div className="col-sm-12">
                                <button type="submit" onClick={submit_data} className="btn btn-primary btn-round">Submit</button>
                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row clearfix">
            <div className="col-md-12">
                <div className="card">
                    <div className="header">
                        <h2><strong>Registration</strong> Information <small>Description text here...</small> </h2>
                        <ul className="header-dropdown">
                            <li className="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more"></i> </a>
                                <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                    <li><a href="javascript:void(0);">Edit</a></li>
                                    <li><a href="javascript:void(0);">Delete</a></li>
                                    <li><a href="javascript:void(0);">Report</a></li>
                                </ul>
                            </li>
                            <li className="remove">
                                <a role="button" className="boxs-close"><i class="zmdi zmdi-close"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="row clearfix">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="text" class="form-control" placeHolder="Doctor Name" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="text" class="form-control" placeHolder="Staff on Duty" />
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="text" class="form-control" placeHolder="Ward No." />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="zmdi zmdi-calendar"></i>
                                    </span>
                                    <input type="text" class="datetimepicker form-control" placeHolder="Please choose date & time..." />
                                </div>                               
                            </div>
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-primary btn-round">Submit</button>
                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
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
    )
}
export default Add_patient;
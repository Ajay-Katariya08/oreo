import Header from "../Doctors/Header";
import Sidebar from "../Sidebar";
import '../../assets3/plugins/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css';
import axios from "axios";
import { useState } from "react";
function Appointment(){
    const [Fname,setFname]=useState('');
    const [Lname,setLname]=useState('');
    const [dob,setdob]=useState('');
    const [gender,setgender]=useState('');
    const [service,setservice]=useState('');
    const [date,setdate]=useState('');
    const [email,setemail]=useState('');
    const [phone,setphone]=useState('');
    const [wish,setwish]=useState('');

    function Add_Appointment() {
        axios
          .post("http://localhost/oreo/Appointment.php", {
            Fname,
            Lname,
            dob,
            gender,
            service,
            phone,
            date,
            email,
            phone,
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

    return(
        <>
 <div className="theme-cyan">
    <Sidebar/>
    <Header/>
  <section className="content">
    <div className="block-header">
      <div className="row">
        <div className="col-lg-7 col-md-5 col-sm-12">
          <h2>Book Appointment
            <small>Welcome to Oreo</small>
          </h2>
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12">
          <ul className="breadcrumb float-md-right">
            <li className="breadcrumb-item"><a href="/"><i className="zmdi zmdi-home" />Oreo</a></li>
            <li className="breadcrumb-item"><a href="javascript:void(0);">Appointment</a></li>
            <li className="breadcrumb-item active">Book Appointment</li>
          </ul>
        </div>
      </div>
    </div>    
    <div className="container-fluid">        
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="card">
            <div className="header">
              <h2><strong>Book</strong> Appointment<small>Description text here...</small> </h2>
              <ul className="header-dropdown">                            
                <li className="remove">
                  <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                </li>
              </ul>
            </div>
            <div className="body">
              <div className="row clearfix">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="text" className="form-control" onChange={(e)=>setFname(e.target.value)} placeholder="First Name" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="text" className="form-control" onChange={(e)=>setLname(e.target.value)} placeholder="Last Name" />
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-sm-3">
                  <div className="form-group">
                    <input type="text" className="form-control" onChange={(e)=>setdob(e.target.value)} placeholder="Date of Birth" />
                  </div>
                </div>
                <div className="col-sm-3">
                  <select className="form-control show-tick" onChange={(e)=>setgender(e.target.value)}>
                    <option value>- Gender -</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="col-sm-3">
                  <select className="form-control show-tick" onChange={(e)=>setservice(e.target.value)}>
                    <option value selected disabled>- Service -</option>
                    <option disabled>Select Service</option>
                    <option value="Dental Checkup">Dental Checkup</option>
                    <option value="Full Body Checkup">Full Body Checkup</option>
                    <option value="ENT Checkup">ENT Checkup</option>
                    <option value="Heart Checkup">Heart Checkup</option>
                  </select>                                
                </div>
                <div className="col-sm-3">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-calendar" />
                    </span>
                    <input type="text" className="form-control datetimepicker" onChange={(e)=>setdate(e.target.value)} placeholder="Please choose date & time..." />
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-sm-12">
                  <div className="form-group">
                    <input type="text" className="form-control" onChange={(e)=>setemail(e.target.value)} placeholder="Enter Your Email" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <input type="text" className="form-control" onChange={(e)=>setphone(e.target.value)} placeholder="Phone" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea rows={4} className="form-control no-resize" onChange={(e)=>setwish(e.target.value)}  placeholder="Please type what you want..." defaultValue={""} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-primary btn-round" onClick={Add_Appointment}>Submit</button>
                  <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

        </>
    )
}
export default Appointment;
import Header from "../Doctors/Header";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useEffect,useState } from "react";

function View_Appointment()
{
  const[data,setdata]=useState([]);
  useEffect(() => {
      axios.get('http://localhost/oreo/Appointment.php')
         .then(function (response) {
            console.log(response.data);
            setdata(response.data);
         })
         .catch(function (error) {
            console.log(error);

         });
   }, [])
    return(
        <>
 <div className="theme-cyan">

        <Header/>
        <Sidebar/>
  <section className="content">
    <div className="block-header">
      <div className="row">
        <div className="col-lg-7 col-md-5 col-sm-12">
          <h2>View Appointment
            <small>Welcome to Oreo</small>
          </h2>
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12">
          <ul className="breadcrumb float-md-right">
            <li className="breadcrumb-item"><a href="/"><i className="zmdi zmdi-home" />Oreo</a></li>
            <li className="breadcrumb-item"><a href="javascript:void(0);">View-Appointment</a></li>
            <li className="breadcrumb-item active">Appointment</li>
          </ul>
        </div>
      </div>
    </div>    
    <div className="container-fluid">        
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="card">
            <div className="header">
              <h2><strong>View</strong> Appointment<small>Description text here...</small> </h2>
              <ul className="header-dropdown">                            
                <li className="remove">
                  <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                </li>
              </ul>
            </div>
            <div class="body">
                        {/* <!-- Nav tabs --></img> */}
                        {/* <ul class="nav nav-tabs padding-0">
                            <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#All">All</a></li>
                        </ul> */}
                            
                        {/* <!-- Tab panes --> */}
                        <div class="tab-content m-t-10">
                            <div class="tab-pane table-responsive active" id="All">
                                <table class="table m-b-0 table-hover">
                                    <thead>
                                        <tr>                                       
                                            <th>Appointment ID</th>
                                            <th>Name</th>
                                            <th>Date Of Birth</th>
                                            <th>Gender</th>
                                            <th>Service</th>
                                            <th>Email</th>
                                            <th>Number</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                      {
                                          data.map((i,k)=>{
                                            return(
                                              <>
                                        <tr key={k}>
                                            {/* <td><span class="list-icon"><img class="patients-img" src="../assets/images/xs/avatar1.jpg" alt=""></img></span></td> */}
                                            <td>{i.id}</td>
                                            <td><span class="list-name">{i.Fname} {i.Lname}</span></td>
                                            <td>{i.dob}</td>
                                            <td>{i.gender}</td>
                                            <td>{i.service}</td>
                                            <td>{i.email}</td>
                                            <td>{i.phone}</td>
                                            {/* <td><span class="badge badge-success">Approved</span></td> */}
                                        </tr>
                                              </>
                                            )
                                          })
                                      }
                                    
                                       
                                    </tbody>
                                </table>                            
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
export default View_Appointment;
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useState } from 'react';
function Register(){
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    function submit1(){
        
                if (name=="" || email=="" || password=="") {
                    
                    alert('Please, Enter your data...!')
                }
                else
                {
                    axios.post('http://localhost/oreo/register.php',{name,email,password})
                    .then(function (response) {
                        console.log(response);
                        // setId(response.data.id)
                        // alert("ID == " + response.data.id)
                
                        if(response){
                            alert('Your data is Submited...!')
                            // window.localStorage.setItem('id', response.data.id)
                            window.location.href = '/'
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
                    axios
                    .get("http://localhost/oreo/register.php")
                    .then(function (response) {
                      // handle success
                      console.log(response);
                    //   setdata(response.data);
                    })
                    .catch(function (error) {
                      // handle error
                      console.log(error);
                    });
            }
                }
           
    return(
        <>
        <body className="theme-cyan authentication sidebar-collapse page-header bg_img">
        <div className="page-header">
    <div className="page-header-image"></div>
    <div className="container">
        <div className="col-md-12 content-center">
            <div className="card-plain">
                <form class="form" method="" action="#">
                    <div className="header">
                        <div className="logo-container">
                            <img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" alt=""></img>
                        </div>
                        <h5>Sign Up</h5>
                        <span>Register a new membership</span>
                    </div>
                    <div className="content">                                                
                        <div className="input-group">
                            <input type="text" class="form-control" onChange={(e)=>setname(e.target.value)} placeHolder="Enter User Name"></input>
                            <span className="input-group-addon">
                                <i className="zmdi zmdi-account-circle"></i>
                            </span>
                        </div>
                        <div className="input-group">
                            <input type="text" class="form-control" onChange={(e)=>setemail(e.target.value)} placeHolder="Enter Email"></input>
                            <span className="input-group-addon">
                                <i className="zmdi zmdi-email"></i>
                            </span>
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} className="form-control" />
                            <span className="input-group-addon">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                        </div>                        
                    </div>
                    <div className="checkbox">
                            <input id="terms" type="checkbox"></input>
                            <label htmlFor="terms">
                                    I read and agree to the <a href="javascript:void(0);">terms of usage</a>
                            </label>
                        </div>
                    <div className="footer text-center">
                        <a href="#" className="btn btn-primary btn-round btn-block  waves-effect waves-light" onClick={submit1}>SIGN UP</a>
                        <h5><a class="link" href="/">You already have a membership?</a></h5>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    </body>
        </>
    )
}
export default Register;
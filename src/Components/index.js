import Sidebar from './Sidebar';
export function Index(){
    return(
        <>
        <body className="theme-cyan">
{/* <!-- Page Loader --> */}
<div className="page-loader-wrapper">
    <div className="loader">
        <div class="m-t-30"><img class="zmdi-hc-spin" src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width="48" height="48" alt="Oreo"></img></div>
        <p>Please wait...</p>        
    </div>
</div>
{/* <!-- Overlay For Sidebars --> */}
<div className="overlay"></div>
{/* <!-- Top Bar --> */}
<nav className="navbar ML-Auto">
    <ul className="nav navbar-nav navbar-left">
        <li>
            <div className="navbar-header">
                <a href="javascript:void(0);" className="bars"></a>
                <a className="navbar-brand" href="/"><img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width="30" alt="Oreo"></img><span class="m-l-10">Oreo</span></a>
            </div>
        </li>
        <li><a href="javascript:void(0);" className="ls-toggle-btn" data-close="true"><i class="zmdi zmdi-swap"></i></a></li>
        <li className="d-none d-lg-inline-block"><a href="events.html" title="Events"><i class="zmdi zmdi-calendar"></i></a></li>
        <li className="d-none d-lg-inline-block"><a href="mail-inbox.html" title="Inbox"><i class="zmdi zmdi-email"></i></a></li>
        <li><a href="contact.html" title="Contact List"><i className="zmdi zmdi-account-box-phone"></i></a></li>
        <li className="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="zmdi zmdi-notifications"></i>
            <div className="notify"><span class="heartbit"></span><span class="point"></span></div>
            </a>
            <ul className="dropdown-menu pullDown">
                <li className="body">
                    <ul className="menu list-unstyled">
                        <li>
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object" src="../assets/images/xs/avatar2.jpg" alt=""></img>
                                    <div className="media-body">
                                        <span className="name">Sophia <span class="time">30min ago</span></span>
                                        <span className="message">There are many variations of passages</span>                                        
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object" src="../assets/images/xs/avatar3.jpg" alt=""></img>
                                    <div className="media-body">
                                        <span className="name">Sophia <span class="time">31min ago</span></span>
                                        <span className="message">There are many variations of passages of Lorem Ipsum</span>                                        
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object" src="../assets/images/xs/avatar4.jpg" alt=""></img>
                                    <div className="media-body">
                                        <span className="name">Isabella <span class="time">35min ago</span></span>
                                        <span className="message">There are many variations of passages</span>                                        
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object" src="../assets/images/xs/avatar5.jpg" alt=""></img>
                                    <div className="media-body">
                                        <span className="name">Alexander <span class="time">35min ago</span></span>
                                        <span className="message">Contrary to popular belief, Lorem Ipsum random</span>                                        
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object" src="../assets/images/xs/avatar6.jpg" alt=""></img>
                                    <div className="media-body">
                                        <span className="name">Grayson <span class="time">1hr ago</span></span>
                                        <span className="message">There are many variations of passages</span>                                        
                                    </div>
                                </div>
                            </a>
                        </li>                        
                    </ul>
                </li>
                <li class="footer"> <a href="javascript:void(0);">View All</a> </li>
            </ul>
        </li>
        <li className="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="zmdi zmdi-flag"></i>
            <div className="notify">
                <span className="heartbit"></span>
                <span className="point"></span>
            </div>
            </a> 
            <ul className="dropdown-menu pullDown">
                <li className="header">Project</li>
                <li className="body">
                    <ul className="menu tasks list-unstyled">
                        <li>
                            <a href="#">
                                <div className="progress-container progress-primary">
                                    <span className="progress-badge">Neurology</span>
                                    <div className="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" width="86%">
                                            <span className="progress-value">86%</span>
                                        </div>
                                    </div>                        
                                    <ul className="list-unstyled team-info">
                                        <li className="m-r-15"><small class="text-muted">Team</small></li>
                                        <li>
                                            <img src="../assets/images/xs/avatar2.jpg" alt="Avatar"></img>
                                        </li>
                                        <li>
                                            <img src="../assets/images/xs/avatar3.jpg" alt="Avatar"></img>
                                        </li>
                                        <li>
                                            <img src="../assets/images/xs/avatar4.jpg" alt="Avatar"></img>
                                        </li>                            
                                    </ul>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="progress-container progress-info">
                                    <span className="progress-badge">Gynecology</span>
                                    <div className="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" width="45%">
                                            <span className="progress-value">45%</span>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled team-info">
                                        <li className="m-r-15"><small class="text-muted">Team</small></li>
                                        <li>
                                            <img src="../assets/images/xs/avatar10.jpg" alt="Avatar" />
                                        </li>
                                        <li>
                                            <img src="../assets/images/xs/avatar9.jpg" alt="Avatar" />
                                        </li>
                                        <li>
                                            <img src="../assets/images/xs/avatar8.jpg" alt="Avatar" />
                                        </li>
                                        <li>
                                            <img src="../assets/images/xs/avatar7.jpg" alt="Avatar" />
                                        </li>
                                        <li>
                                            <img src="../assets/images/xs/avatar6.jpg" alt="Avatar" />
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <div className="progress-container progress-warning">
                                    <span className="progress-badge">Cardio Monitoring</span>
                                    <div className="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="29" aria-valuemin="0" aria-valuemax="100">
                                            <span className="progress-value">29%</span>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled team-info">
                                        <li className="m-r-15"><small class="text-muted">Team</small></li>
                                        <li>
                                            <img src="../assets/images/xs/avatar5.jpg" alt="Avatar" />
                                        </li>
                                        <li>
                                            <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
                                        </li>
                                        <li>
                                            <img src="../assets/images/xs/avatar7.jpg" alt="Avatar" />
                                        </li>                            
                                    </ul>
                                </div>
                            </a>
                        </li>                    
                    </ul>
                </li>
                <li class="footer"><a href="javascript:void(0);">View All</a></li>
            </ul>
        </li>
        <li className="d-none d-md-inline-block">
            <div className="input-group">                
                <input type="text" class="form-control" placeHolder="Search..."></input>
                <span className="input-group-addon">
                    <i className="zmdi zmdi-search"></i>
                </span>
            </div>
        </li>        
        <li className="float-right">
            <a href="/" className="mega-menu"  data-close="true"><i class="zmdi zmdi-power"  onClick={()=>{ window.localStorage.removeItem('id') }} ></i></a>
            <a href="javascript:void(0);" className="js-right-sidebar" data-close="true"><i class="zmdi zmdi-settings zmdi-hc-spin"></i></a>
        </li>
    </ul>
</nav>
<Sidebar/>

{/* <!-- Chat-launcher --> */}
<div className="chat-launcher"></div>
<div className="chat-wrapper">
    <div className="card">
        <div className="header">
            <ul className="list-unstyled team-info margin-0">
                <li className="m-r-15"><h2>Dr. Team</h2></li>
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
                    <a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle"></i></a>
                </li>
            </ul>                       
        </div>
        <div className="body">
            <div className="chat-widget">
            <ul className="chat-scroll-list clearfix">
                <li className="left float-left">
                    <img src="../assets/images/xs/avatar3.jpg" class="rounded-circle" alt=""></img>
                    <div className="chat-info">
                        <a class="name" href="#">Alexander</a>
                        <span className="datetime">6:12</span>                            
                        <span className="message">Hello, John </span>
                    </div>
                </li>
                <li className="right">
                    <div className="chat-info"><span class="datetime">6:15</span> <span class="message">Hi, Alexander<br /> How are you!</span> </div>
                </li>
                <li className="right">
                    <div className="chat-info"><span class="datetime">6:16</span> <span class="message">There are many variations of passages of Lorem Ipsum available</span> </div>
                </li>
                <li class="left float-left"> <img src="../assets/images/xs/avatar2.jpg" class="rounded-circle" alt=""></img>
                    <div className="chat-info"> <a class="name" href="#">Elizabeth</a> <span class="datetime">6:25</span> <span class="message">Hi, Alexander,<br /> John <br /> What are you doing?</span> </div>
                </li>
                <li class="left float-left"> <img src="../assets/images/xs/avatar1.jpg" class="rounded-circle" alt="" />
                    <div className="chat-info"> <a class="name" href="#">Michael</a> <span class="datetime">6:28</span> <span class="message">I would love to join the team.</span> </div>
                </li>
                    <li className="right">
                    <div className="chat-info"><span class="datetime">7:02</span> <span class="message">Hello, <br />Michael</span> </div>
                </li>
            </ul>
            </div>
            <div className="input-group p-t-15">
                <input type="text" class="form-control" placeHolder="Enter text here..."></input>
                <span className="input-group-addon">
                    <i className="zmdi zmdi-mail-send"></i>
                </span>
            </div>
        </div>
    </div>
</div>
{/* <!-- Main Content --> */}
<section className="content home">
    <div className="block-header">
        <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12">
                <h2>Dashboard
                <small>Welcome to Oreo</small>
                </h2>
            </div>            
            <div className="col-lg-7 col-md-7 col-sm-12 text-right">
                <div className="inlineblock text-center m-r-15 m-l-15 d-none d-lg-inline-block">
                    <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-Width="2" data-bar-Spacing="5" data-bar-Color="#fff">3,2,6,5,9,8,7,9,5,1,3,5,7,4,6</div>
                    <small className="col-white">Visitors</small>
                </div>
                <div className="inlineblock text-center m-r-15 m-l-15 d-none d-lg-inline-block">
                    <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-Width="2" data-bar-Spacing="5" data-bar-Color="#fff">1,3,5,7,4,6,3,2,6,5,9,8,7,9,5</div>
                    <small className="col-white">Operations</small>
                </div>
                <button class="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                    <i className="zmdi zmdi-plus"></i>
                </button>
                <ul className="breadcrumb float-md-right">
                    <li className="breadcrumb-item"><a href="Admin"><i class="zmdi zmdi-home"></i> Oreo</a></li>
                    <li className="breadcrumb-item active">Dashboard</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row clearfix">
            <div className="col-lg-4 col-md-6">
                <div className="card">
                    <div className="body">
                        <h3 className="number count-to m-b-0" data-from="0" data-to="1600" data-speed="2500" data-fresh-interval="700">1600 <i class="zmdi zmdi-trending-up float-right"></i></h3>
                        <p className="text-muted">New Feedbacks</p>
                        <div className="progress">
                            <div class="progress-bar l-blush" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Change 15%</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card">
                    <div className="body">
                        <h3 className="number count-to m-b-0" data-from="0" data-to="3218" data-speed="2500" data-fresh-interval="1000">3218 <i class="zmdi zmdi-trending-up float-right"></i></h3>
                        <p className="text-muted">Happy Clients</p>
                        <div className="progress">
                            <div class="progress-bar l-green" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Change 23%</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="card">
                    <div className="body">
                        <h3 className="number count-to m-b-0" data-from="0" data-to="284" data-speed="2500" data-fresh-interval="1000">284 <i class="zmdi zmdi-trending-up float-right"></i></h3>
                        <p className="text-muted">Well Smiley Faces <i class="zmdi zmdi-mood"></i></p>
                        <div className="progress">
                            <div class="progress-bar l-parpl" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Change 50%</small>
                    </div>
                </div>
            </div>
        </div>
        <div className="row clearfix">
            <div className="col-lg-8 col-md-12">
                <div className="card">
                    <div className="header">
                        <h2><strong>Hospital</strong> Survey</h2>
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
                        {/* <!-- Nav tabs --> */}
                        <ul className="nav nav-tabs padding-0">
                            <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#chart-view">Chart View</a></li>
                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#table-view">Table View</a></li>
                        </ul>
                            
                        {/* <!-- Tab panes --> */}
                        <div className="tab-content m-t-10">
                            <div class="tab-pane active" id="chart-view">
                                <div id="area_chart" className="graph"></div>
                                <div className="xl-slategray">
                                    <div className="body">
                                        <div className="row text-center">
                                            <div className="col-sm-3 col-6">
                                                <h4 className="margin-0">$106</h4>
                                                <p className="text-muted margin-0"> Today's</p>
                                            </div>
                                            <div className="col-sm-3 col-6">
                                                <h4 className="margin-0">$907</h4>
                                                <p className="text-muted margin-0">This Week's</p>
                                            </div>
                                            <div className="col-sm-3 col-6">
                                                <h4 className="margin-0">$4210</h4>
                                                <p className="text-muted margin-0">This Month's</p>
                                            </div>
                                            <div className="col-sm-3 col-6">
                                                <h4 className="margin-0">$7,000</h4>
                                                <p className="text-muted margin-0">This Year's</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                            <div class="tab-pane" id="table-view">
                                <div className="table-responsive">
                                    <table className="table m-b-0 table-hover">
                                        <thead>
                                            <tr>                                                
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>Earning</th>
                                                <th>Reviews</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>                                                
                                                <td>Hospital Name</td>
                                                <td>Porterfield 508 Virginia Street Chicago, IL 60653</td>
                                                <td>$2,325</td>
                                                <td>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                </td>
                                                <td>
                                                    <button className="btn btn-sm btn-neutral"><i class="zmdi zmdi-chart"></i></button>
                                                </td>
                                            </tr>
                                            <tr>                                                
                                                <td>Hospital Name</td>
                                                <td>2595 Pearlman Avenue Sudbury, MA 01776 </td>
                                                <td>$3,325</td>
                                                <td>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                </td>
                                                <td>
                                                    <button className="btn btn-sm btn-neutral"><i class="zmdi zmdi-chart"></i></button>
                                                </td>
                                            </tr>
                                            <tr>                                                
                                                <td>Hospital Name</td>
                                                <td>Porterfield 508 Virginia Street Chicago, IL 60653</td>
                                                <td>$5,021</td>
                                                <td>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                </td>
                                                <td>
                                                    <button className="btn btn-sm btn-neutral"><i class="zmdi zmdi-chart"></i></button>
                                                </td>
                                            </tr>
                                            <tr>                                                
                                                <td>Hospital Name</td>
                                                <td>508 Virginia Street Chicago, IL 60653</td>
                                                <td>$1,325</td>
                                                <td>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star-outline"></i>
                                                </td>
                                                <td>
                                                    <button className="btn btn-sm btn-neutral"><i class="zmdi zmdi-chart"></i></button>
                                                </td>
                                            </tr>
                                            <tr>                                                
                                                <td>Hospital Name</td>
                                                <td>1516 Holt Street West Palm Beach, FL 33401</td>
                                                <td>$2,325</td>
                                                <td>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star-outline"></i>
                                                </td>
                                                <td>
                                                    <button className="btn btn-sm btn-neutral"><i class="zmdi zmdi-chart"></i></button>
                                                </td>
                                            </tr>
                                            <tr>                                                
                                                <td>Hospital Name</td>
                                                <td>508 Virginia Street Chicago, IL 60653</td>
                                                <td>$2,325</td>
                                                <td>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star col-amber"></i>
                                                    <i className="zmdi zmdi-star-outline"></i>
                                                </td>
                                                <td>
                                                    <button className="btn btn-sm btn-neutral"><i class="zmdi zmdi-chart"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="card">
                    <div className="body">
                        <div className="sparkline m-b-10" data-type="bar" data-width="97%" data-height="38px" data-bar-Width="2" data-bar-Spacing="6" data-bar-Color="#555555">2,8,5,3,1,7,9,5,6,4,2,3,1,2,8,5,3,1,7,9,5,6,4,2,3,1</div>
                        <h6 className="text-center m-b-15">Total New Patient</h6>
                        <div id="world-map-markers2"></div>
                        <div className="table-responsive m-t-20">
                            <table className="table table-striped m-b-0">
                                <thead>
                                    <tr>
                                        <th>City</th>                                        
                                        <th>Count</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>New York</td>
                                        <td>215<i className="zmdi zmdi-trending-up m-l-10"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Los Angeles</td>
                                        <td>189<i className="zmdi zmdi-trending-up m-l-10"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Chicago</td>
                                        <td>408<i className="zmdi zmdi-trending-down m-l-10"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Houston</td>
                                        <td>78<i className="zmdi zmdi-trending-down m-l-10"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Phoenix</td>
                                        <td>148<i className="zmdi zmdi-trending-up m-l-10"></i></td>
                                    </tr>
                                    <tr>
                                        <td>San Diego</td>
                                        <td>102<i className="zmdi zmdi-trending-down m-l-10"></i></td>
                                    </tr>                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>         
        <div className="row clearfix">
            <div className="col-lg-4 col-md-12">
                <div className="card">
                    <div className="header">
                        <h2><strong>Dr.</strong> Timeline</h2>
                        <ul className="header-dropdown">                            
                            <li className="remove">
                                <a role="button" className="boxs-close"><i class="zmdi zmdi-close"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="new_timeline">
                            <div className="header">
                                <div className="color-overlay">
                                    <div className="day-number">8</div>
                                    <div className="date-right">
                                    <div className="day-name">Monday</div>
                                    <div className="month">February 2018</div>
                                    </div>
                                </div>                                
                            </div>
                            <ul>
                                <li>
                                    <div className="bullet pink"></div>
                                    <div className="time">5pm</div>
                                    <div className="desc">
                                        <h3>New Icon</h3>
                                        <h4>Mobile App</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="bullet green"></div>
                                    <div className="time">3 - 4pm</div>
                                    <div className="desc">
                                        <h3>Design Stand Up</h3>
                                        <h4>Hangouts</h4>
                                        <ul className="list-unstyled team-info margin-0 p-t-5">                                            
                                            <li><img src="http://via.placeholder.com/35x35" alt="Avatar" /></li>
                                            <li><img src="http://via.placeholder.com/35x35" alt="Avatar" /></li>                                            
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="bullet orange"></div>
                                    <div className="time">12pm</div>
                                    <div className="desc">
                                        <h3>Lunch Break</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="bullet green"></div>
                                    <div className="time">9 - 11am</div>
                                    <div className="desc">
                                        <h3>Finish Home Screen</h3>
                                        <h4>Web App</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6">
                        <div className="card top_counter">
                            <div className="body">
                                <div className="icon xl-slategray"><i class="zmdi zmdi-account"></i> </div>
                                <div className="content">
                                    <div className="text">New Patient</div>
                                    <h5 className="number">27</h5>
                                </div>
                            </div>                    
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card top_counter">
                            <div className="body">
                                <div className="icon xl-slategray"><i class="zmdi zmdi-account"></i> </div>
                                <div className="content">
                                    <div className="text">OPD Patient</div>
                                    <h5 className="number">19</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card top_counter">
                            <div className="body">
                                <div className="icon xl-slategray"><i class="zmdi zmdi-bug"></i> </div>
                                <div className="content">
                                    <div className="text">Operations</div>
                                    <h5 className="number">08</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card visitors-map">
                    <div className="header">
                        <h2><strong>Our</strong> Location <small>Contrary to popular belief, Lorem Ipsum is not simply random text</small></h2>
                        <ul className="header-dropdown">
                            <li className="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more"></i> </a>
                                <ul className="dropdown-menu dropdown-menu-right slideUp">
                                    <li><a href="javascript:void(0);">Action</a></li>
                                    <li><a href="javascript:void(0);">Another action</a></li>
                                    <li><a href="javascript:void(0);">Something else</a></li>
                                </ul>
                            </li>
                            <li className="remove">
                                <a role="button" className="boxs-close"><i class="zmdi zmdi-close"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div id="world-map-markers"></div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="body">
                                    <ul className="row location_list list-unstyled">
                                        <li className="col-lg-4 col-md-4 col-6">
                                            <div className="body xl-turquoise">
                                                <i className="zmdi zmdi-pin"></i>
                                                <h4 className="number count-to" data-from="0" data-to="453" data-speed="2500" data-fresh-interval="700">453</h4>
                                                <span>America</span>
                                            </div>
                                        </li>
                                        <li className="col-lg-4 col-md-4 col-6">
                                            <div className="body xl-khaki">
                                                <i className="zmdi zmdi-pin"></i>
                                                <h4 className="number count-to" data-from="0" data-to="124" data-speed="2500" data-fresh-interval="700">124</h4>
                                                <span>Australia</span>
                                            </div>
                                        </li>
                                        <li className="col-lg-4 col-md-4 col-6">
                                            <div className="body xl-parpl">
                                                <i className="zmdi zmdi-pin"></i>
                                                <h4 className="number count-to" data-from="0" data-to="215" data-speed="2500" data-fresh-interval="700">215</h4>
                                                <span>Canada</span>
                                            </div>
                                        </li>
                                        <li className="col-lg-4 col-md-4 col-6">
                                            <div className="body xl-salmon">
                                                <i className="zmdi zmdi-pin"></i>
                                                <h4 className="number count-to" data-from="0" data-to="155" data-speed="2500" data-fresh-interval="700">155</h4>
                                                <span>India</span>
                                            </div>
                                        </li>
                                        <li className="col-lg-4 col-md-4 col-6">
                                            <div className="body xl-blue">
                                                <i className="zmdi zmdi-pin"></i>
                                                <h4 className="number count-to" data-from="0" data-to="78" data-speed="2500" data-fresh-interval="700">78</h4>
                                                <span>UK</span>
                                            </div>
                                        </li>
                                        <li className="col-lg-4 col-md-4 col-6">
                                            <div className="body xl-slategray">
                                                <i className="zmdi zmdi-pin"></i>
                                                <h4 className="number count-to" data-from="0" data-to="55" data-speed="2500" data-fresh-interval="700">55</h4>
                                                <span>Other</span>
                                            </div>
                                        </li>                      
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>           
        </div>        
        <div className="row clearfix">
            <div className="col-lg-4 col-md-12">
                <div className="card">
                    <div className="header">
                        <h2><strong>Heart</strong> Surgeries <small>18% High then last month</small></h2>
                    </div>
                    <div className="body">
                        <div className="sparkline" data-type="line" data-spot-Radius="1" data-highlight-Spot-Color="rgb(233, 30, 99)" data-highlight-Line-Color="#222"
                            data-min-Spot-Color="rgb(233, 30, 99)" data-max-Spot-Color="rgb(96, 125, 139)" data-spot-Color="rgb(96, 125, 139, 0.7)"
                            data-offset="90" data-width="100%" data-height="50px" data-line-Width="1" data-line-Color="rgb(96, 125, 139, 0.7)"
                            data-fill-Color="rgba(96, 125, 139, 0.3)"> 6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6 </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="card">
                    <div className="header">
                        <h2><strong>Medical</strong> Treatment <small>18% High then last month</small></h2>
                    </div>
                    <div className="body">
                        <div className="sparkline" data-type="line" data-spot-Radius="1" data-highlight-Spot-Color="rgb(233, 30, 99)" data-highlight-Line-Color="#222"
                            data-min-Spot-Color="rgb(233, 30, 99)" data-max-Spot-Color="rgb(120, 184, 62)" data-spot-Color="rgb(120, 184, 62, 0.7)"
                            data-offset="90" data-width="100%" data-height="50px" data-line-Width="1" data-line-Color="rgb(120, 184, 62, 0.7)"
                            data-fill-Color="rgba(120, 184, 62, 0.3)"> 6,4,7,6,9,3,3,5,7,4,2,3,7,6 </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="card">
                    <div className="header">
                        <h2><strong>New</strong> Patient <small >18% High then last month</small></h2>                        
                    </div>
                    <div className="body">                        
                        <div className="sparkline" data-type="bar" data-width="97%" data-height="50px" data-bar-Width="4" data-bar-Spacing="10" data-bar-Color="#00ced1">2,8,5,3,1,7,9,5,6,4,2,3,1</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row clearfix">
            <div className="col-lg-4 col-md-12">
                <div className="card tasks_report">
                    <div className="header">
                        <h2><strong>Total</strong> Revenue</h2>                        
                        <ul className="header-dropdown">
                            <li className="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more"></i> </a>
                                <ul className="dropdown-menu dropdown-menu-right slideUp">
                                    <li><a href="javascript:void(0);">2017 Year</a></li>
                                    <li><a href="javascript:void(0);">2016 Year</a></li>
                                    <li><a href="javascript:void(0);">2015 Year</a></li>
                                </ul>
                            </li>
                            <li className="remove">
                                <a role="button" className="boxs-close"><i class="zmdi zmdi-close"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="body text-center">
                        <h4 className="margin-0">Total Sale</h4>
                        <h6 className="m-b-20">2,45,124</h6>
                        <input type="text" class="knob dial1" value="66" data-width="100" data-height="100" data-thickness="0.1" data-fgColor="#212121" readonly></input>
                        <h6 className="m-t-20">Satisfaction Rate</h6>
                        <small className="displayblock">47% Average <i class="zmdi zmdi-trending-up"></i></small>
                        <div className="sparkline m-t-20" data-type="bar" data-width="97%" data-height="28px" data-bar-Width="2" data-bar-Spacing="8" data-bar-Color="#212121">3,2,6,5,9,8,7,8,4,5,1,2,9,5,1,3,5,7,4,6</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="card patient_list">
                    <div className="header">
                        <h2><strong>New</strong> Patient List</h2>                        
                        <ul className="header-dropdown">
                            <li className="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more"></i> </a>
                                <ul className="dropdown-menu dropdown-menu-right slideUp">
                                    <li><a href="javascript:void(0);">2017 Year</a></li>
                                    <li><a href="javascript:void(0);">2016 Year</a></li>
                                    <li><a href="javascript:void(0);">2015 Year</a></li>
                                </ul>
                            </li>
                            <li className="remove">
                                <a role="button" className="boxs-close"><i class="zmdi zmdi-close"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="table-responsive">
                            <table className="table table-striped m-b-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Diseases</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><img src="http://via.placeholder.com/35x35" alt="Avatar" className="rounded-circle" /></td>
                                        <td>Virginia</td>
                                        <td>123 6th St. Melbourne, FL 32904</td>
                                        <td><span className="badge badge-danger">Fever</span> </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><img src="http://via.placeholder.com/35x35" alt="Avatar" className="rounded-circle" /></td>
                                        <td>Julie </td>
                                        <td>71 Pilgrim Avenue Chevy Chase, MD 20815</td>
                                        <td><span className="badge badge-info">Cancer</span> </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><img src="http://via.placeholder.com/35x35" alt="Avatar" className="rounded-circle" /></td>
                                        <td>Woods</td>
                                        <td>70 Bowman St. South Windsor, CT 06074</td>
                                        <td><span className="badge badge-warning">Lakva</span> </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><img src="http://via.placeholder.com/35x35" alt="Avatar" className="rounded-circle" /></td>
                                        <td>Lewis</td>
                                        <td>4 Goldfield Rd.Honolulu, HI 96815</td>
                                        <td><span className="badge badge-success">Dental</span> </td>
                                    </tr>
                                </tbody>
                            </table>
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
export default Index;
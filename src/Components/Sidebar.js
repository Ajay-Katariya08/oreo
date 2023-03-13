function Sidebar(){
    return(
        <>
        <aside id="leftsidebar" className="sidebar">
    <ul className="nav nav-tabs">
        <li className="nav-item"><a class="nav-link active" data-toggle="tab" href="#dashboard"><i class="zmdi zmdi-home m-r-5"></i>Oreo</a></li>
        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#user">Doctor</a></li>
    </ul>
    <div className="tab-content">
        <div class="tab-pane stretchRight active" id="dashboard">
            <div className="menu">
                <ul className="list">
                    <li>
                        <div className="user-info">
                            <div class="image"><a href="profile.html"><img src={require('../assets3/images/profile_av.jpg')} alt="User"></img></a></div>
                            <div className="detail">
                                <h4>Dr. Charlotte</h4>
                                <small>Neurologist</small>                        
                            </div>
                        </div>
                    </li>
                    <li className="header">MAIN</li>
                    <li className="active open"><a href="index.html"><i class="zmdi zmdi-home"></i><span>Dashboard</span></a></li>            
                    <li><a href="Appointment"><i className="zmdi zmdi-calendar-check"></i><span>Appointment</span> </a></li>
                    <li><a href="View_Appointment"><i className="zmdi zmdi-calendar-check"></i><span>View Appointment</span> </a></li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i class="zmdi zmdi-account-add"></i><span>Doctors</span> </a>
                        <ul className="ml-menu">
                            <li><a href="All_doctors">All Doctors</a></li>
                            <li><a href="Add_doctor">Add Doctor</a></li>                       
                            <li><a href="profile.html">Doctor Profile</a></li>
                            <li><a href="events.html">Doctor Schedule</a></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i class="zmdi zmdi-account-o"></i><span>Patients</span> </a>
                        <ul className="ml-menu">
                            <li><a href="All_patient">All Patients</a></li>
                            <li><a href="Add_patient">Add Patient</a></li>                       
                            <li><a href="patient-profile.html">Patient Profile</a></li>
                            <li><a href="patient-invoice.html">Invoice</a></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i class="zmdi zmdi-balance-wallet"></i><span>Payments</span> </a>
                        <ul className="ml-menu">
                            <li><a href="payments.html">Payments</a></li>
                            <li><a href="add-payments.html">Add Payment</a></li>
                            <li><a href="invoice.html">Invoice</a></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i class="zmdi zmdi-label-alt"></i><span>Departments</span> </a>
                        <ul className="ml-menu">
                            <li><a href="add-departments.html">Add</a></li>
                            <li><a href="all-Departments.html">All Departments</a></li>
                            <li><a href="javascript:void(0);">Cardiology</a></li>
                            <li><a href="javascript:void(0);">Pulmonology</a></li>
                            <li><a href="javascript:void(0);">Gynecology</a></li>
                            <li><a href="javascript:void(0);">Neurology</a></li>
                            <li><a href="javascript:void(0);">Urology</a></li>
                            <li><a href="javascript:void(0);">Gastrology</a></li>
                            <li><a href="javascript:void(0);">Pediatrician</a></li>
                            <li><a href="javascript:void(0);">Laboratory</a></li>
                        </ul>
                    </li>
                    <li> <a href="javascript:void(0);" className="menu-toggle"><i class="zmdi zmdi-lock"></i><span>Authentication</span> </a>
                        <ul className="ml-menu">
                            <li><a href="sign-in.html">Sign In</a> </li>
                            <li><a href="sign-up.html">Sign Up</a> </li>
                            <li><a href="forgot-password.html">Forgot Password</a> </li>
                            <li><a href="404.html">Page 404</a> </li>
                            <li><a href="500.html">Page 500</a> </li>
                            <li><a href="page-offline.html">Page Offline</a> </li>
                            <li><a href="locked.html">Locked Screen</a> </li>
                        </ul>
                    </li>
                    <li className="header">EXTRA COMPONENTS</li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i class="zmdi zmdi-blogger"></i><span>Blog</span></a>
                        <ul className="ml-menu">
                            <li><a href="blog-dashboard.html">Blog Dashboard</a></li>
                            <li><a href="blog-post.html">New Post</a></li>
                            <li><a href="blog-list.html">Blog List</a></li>
                            <li><a href="blog-grid.html">Blog Grid</a></li>
                            <li><a href="blog-details.html">Blog Single</a></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i class="zmdi zmdi-folder"></i><span>File Manager</span> </a>
                        <ul className="ml-menu">
                            <li><a href="file-dashboard.html">All File</a></li>
                            <li><a href="file-documents.html" >Documents</a></li>
                            <li><a href="file-media.html">Media</a></li>
                            <li><a href="file-images.html">Images</a></li>
                        </ul>
                    </li>
                    <li> <a href="javascript:void(0);" className="menu-toggle"><i class="zmdi zmdi-apps"></i><span>App</span> </a>
                        <ul className="ml-menu">
                            <li><a href="mail-inbox.html">Inbox</a></li>
                            <li><a href="chat.html">Chat</a></li>                                                        
                            <li><a href="contact.html">Contact list</a></li>                            
                        </ul>
                    </li>                    
                    <li> <a href="javascript:void(0);" className="menu-toggle"><i class="zmdi zmdi-delicious"></i><span>Widgets</span> </a>
                        <ul className="ml-menu">
                            <li><a href="widgets-app.html">Apps Widgetse</a></li>
                            <li><a href="widgets-data.html">Data Widgetse</a></li>
                        </ul>
                    </li>                    
                    <li> <a href="javascript:void(0);" className="menu-toggle"><i class="zmdi zmdi-copy"></i><span>Sample Pages</span> </a>
                        <ul className="ml-menu">
                            <li><a href="blank.html">Blank Page</a> </li>
                            <li><a href="https://thememakker.com/templates/oreo/hospital/html/rtl/index.html">RTL Support</a></li>
                            <li><a href="image-gallery.html">Image Gallery</a> </li>
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="timeline.html">Timeline</a></li>                            
                            <li><a href="invoice.html">Invoices</a></li>
                            <li><a href="search-results.html">Search Results</a></li>
                        </ul>
                    </li>
                    <li> <a href="javascript:void(0);" className="menu-toggle"><i class="zmdi zmdi-swap-alt"></i><span>User Interface (UI)</span> </a>
                        <ul className="ml-menu">
                            <li><a href="ui_kit.html">UI KIT</a></li>
                            <li><a href="alerts.html">Alerts</a></li>
                            <li><a href="collapse.html">Collapse</a></li>
                            <li><a href="colors.html">Colors</a></li>
                            <li><a href="dialogs.html">Dialogs</a></li>
                            <li><a href="icons.html">Icons</a></li>
                            <li><a href="list-group.html">List Group</a></li>
                            <li><a href="media-object.html">Media Object</a></li>
                            <li><a href="modals.html">Modals</a></li>
                            <li><a href="notifications.html">Notifications</a></li>                    
                            <li><a href="progressbars.html">Progress Bars</a></li>
                            <li><a href="range-sliders.html">Range Sliders</a></li>
                            <li><a href="sortable-nestable.html">Sortable & Nestable</a></li>
                            <li><a href="tabs.html">Tabs</a></li>
                            <li><a href="waves.html">Waves</a></li>
                        </ul>
                    </li>
                    <li className="header">Extra</li>
                    <li>
                        <div className="progress-container progress-primary m-t-10">
                            <span className="progress-badge">Traffic this Month</span>
                            <div className="progress">
                                <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100">
                                    <span className="progress-value">67%</span>
                                </div>
                            </div>
                        </div>
                        <div className="progress-container progress-info">
                            <span className="progress-badge">Server Load</span>
                            <div className="progress">
                                <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100">
                                    <span className="progress-value">86%</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="tab-pane stretchLeft" id="user">
            <div className="menu">
                <ul className="list">
                    <li>
                        <div className="user-info m-b-20 p-b-15">
                            <div class="image"><a href="profile.html"><img src="../assets/images/profile_av.jpg" alt="User"></img></a></div>
                            <div className="detail">
                                <h4>Dr. Charlotte</h4>
                                <small>Neurologist</small>                        
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <a title="facebook" href="#"><i className="zmdi zmdi-facebook"></i></a>
                                    <a title="twitter" href="#"><i className="zmdi zmdi-twitter"></i></a>
                                    <a title="instagram" href="#"><i className="zmdi zmdi-instagram"></i></a>
                                </div>
                                <div className="col-4 p-r-0">
                                    <h5 className="m-b-5">18</h5>
                                    <small>Exp</small>
                                </div>
                                <div className="col-4">
                                    <h5 className="m-b-5">125</h5>
                                    <small>Awards</small>
                                </div>
                                <div className="col-4 p-l-0">
                                    <h5 className="m-b-5">148</h5>
                                    <small>Clients</small>
                                </div>                                
                            </div>
                        </div>
                    </li>
                    <li>
                        <small className="text-muted">Location: </small>
                        <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                        <hr />
                        <small className="text-muted">Email address: </small>
                        <p>Charlotte@example.com</p>
                        <hr />
                        <small className="text-muted">Phone: </small>
                        <p>+ 202-555-0191</p>
                        <hr />
                        <small className="text-muted">Website: </small>
                        <p>dr.charlotte.com/ </p>
                        <hr />
                        <ul className="list-unstyled">
                            <li>
                                <div>Colorectal Surgery</div>
                                <div className="progress m-b-20">
                                    <div className="progress-bar l-blue " role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only">62% Complete</span> </div>
                                </div>
                            </li>
                            <li>
                                <div>Endocrinology</div>
                                <div className="progress m-b-20">
                                    <div className="progress-bar l-green " role="progressbar" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only">87% Complete</span> </div>
                                </div>
                            </li>
                            <li>
                                <div>Dermatology</div>
                                <div className="progress m-b-20">
                                    <div className="progress-bar l-amber" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only">32% Complete</span> </div>
                                </div>
                            </li>
                            <li>
                                <div>Neurophysiology</div>
                                <div className="progress m-b-20">
                                    <div className="progress-bar l-blush" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only">56% Complete</span> </div>
                                </div>
                            </li>
                        </ul>                        
                    </li>                    
                </ul>
            </div>
        </div>
    </div>    
</aside>
<aside id="rightsidebar" className="right-sidebar">
    <ul className="nav nav-tabs">
        <li className="nav-item"><a class="nav-link active" data-toggle="tab" href="#setting"><i class="zmdi zmdi-settings zmdi-hc-spin"></i></a></li>
        <li className="nav-item"><a class="nav-link" data-toggle="tab" href="#chat"><i class="zmdi zmdi-comments"></i></a></li>
        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#activity">Activity</a></li>
    </ul>
    <div className="tab-content">
        <div class="tab-pane slideRight active" id="setting">
            <div className="slim_scroll">
                <div className="card">
                    <h6>General Settings</h6>
                    <ul className="setting-list list-unstyled">
                        <li>
                            <div className="checkbox">
                                <input id="checkbox1" type="checkbox"></input>
                                <label htmlFor="checkbox1">Report Panel Usage</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                                <input id="checkbox2" type="checkbox" checked=""></input>
                                <label htmlFor="checkbox2">Email Redirect</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                                <input id="checkbox3" type="checkbox" checked=""></input>
                                <label htmlFor="checkbox3">Notifications</label>
                            </div>                        
                        </li>
                        <li>
                            <div className="checkbox">
                                <input id="checkbox4" type="checkbox" checked=""></input>
                                <label htmlFor="checkbox4">Auto Updates</label>
                            </div>
                        </li>
                    </ul>
                </div>                
                <div className="card">
                    <h6>Skins</h6>
                    <ul className="choose-skin list-unstyled">
                        <li data-theme="purple">
                            <div className="purple"></div>
                        </li>                   
                        <li data-theme="blue">
                            <div className="blue"></div>
                        </li>
                        <li data-theme="cyan" className="active">
                            <div className="cyan"></div>                    
                        </li>
                        <li data-theme="green">
                            <div className="green"></div>
                        </li>
                        <li data-theme="orange">
                            <div className="orange"></div>
                        </li>
                        <li data-theme="blush">
                            <div className="blush"></div>                    
                        </li>
                    </ul>                    
                </div>
                <div className="card">
                    <h6>Account Settings</h6>
                    <ul className="setting-list list-unstyled">
                        <li>
                            <div className="checkbox">
                                <input id="checkbox5" type="checkbox" checked=""></input>
                                <label htmlFor="checkbox5">Offline</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                                <input id="checkbox6" type="checkbox" checked=""></input>
                                <label htmlFor="checkbox6">Location Permission</label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card theme-light-dark">
                    <h6>Left Menu</h6>
                    <button className="t-light btn btn-default btn-simple btn-round btn-block">Light</button>
                    <button className="t-dark btn btn-default btn-round btn-block">Dark</button>
					<button className="m_img_btn btn btn-primary btn-round btn-block">Sidebar Image</button>                    
                </div>                
                <div className="card">
                    <h6>Information Summary</h6>
                    <div className="row m-b-20">
                        <div className="col-7">                            
                            <small className="displayblock">MEMORY USAGE</small>
                            <h5 className="m-b-0 h6">512</h5>
                        </div>
                        <div className="col-5">
                            <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-Width="5" data-bar-Spacing="3" data-bar-Color="#00ced1">8,7,9,5,6,4,6,8</div>
                        </div>
                    </div>
                    <div className="row m-b-20">
                        <div className="col-7">                            
                            <small className="displayblock">CPU USAGE</small>
                            <h5 className="m-b-0 h6">90%</h5>
                        </div>
                        <div className="col-5">
                            <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-Width="5" data-bar-Spacing="3" data-bar-Color="#F15F79">6,5,8,2,6,4,6,4</div>
                        </div>
                    </div>
                    <div className="row m-b-20">
                        <div className="col-7">                            
                            <small className="displayblock">DAILY TRAFFIC</small>
                            <h5 className="m-b-0 h6">25 142</h5>
                        </div>
                        <div className="col-5">
                            <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-Width="5" data-bar-Spacing="3" data-bar-Color="#78b83e">7,5,8,7,4,2,6,5</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7">                            
                            <small className="displayblock">DISK USAGE</small>
                            <h5 className="m-b-0 h6">60.10%</h5>
                        </div>
                        <div className="col-5">
                            <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-Width="5" data-bar-Spacing="3" data-bar-Color="#457fca">7,5,2,5,6,7,6,4</div>
                        </div>
                    </div>
                </div>
            </div>                
        </div>       
        <div class="tab-pane right_chat stretchLeft" id="chat">
            <div className="slim_scroll">
                <div className="card">
                    <div className="search">                        
                        <div className="input-group">
                            <input type="text" class="form-control" placeHolder="Search..."></input>
                            <span className="input-group-addon">
                                <i className="zmdi zmdi-search"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h6>Recent</h6>
                    <ul className="list-unstyled">
                        <li className="online">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar4.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="name">Sophia</span>
                                        <span className="message">There are many variations of passages of Lorem Ipsum available</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>                            
                        </li>
                        <li className="online">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar5.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="name">Grayson</span>
                                        <span className="message">All the Lorem Ipsum generators on the</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>                            
                        </li>
                        <li className="offline">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar2.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="name">Isabella</span>
                                        <span className="message">Contrary to popular belief, Lorem Ipsum</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>                            
                        </li>
                        <li className="me">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar1.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="name">John</span>
                                        <span className="message">It is a long established fact that a reader</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>                            
                        </li>
                        <li className="online">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar3.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="name">Alexander</span>
                                        <span className="message">Richard McClintock, a Latin professor</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>                            
                        </li>                        
                    </ul>
                </div>
                <div className="card">
                    <h6>Contacts</h6>
                    <ul className="list-unstyled">
                        <li className="offline inlineblock">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar10.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="offline inlineblock">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar6.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="offline inlineblock">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar7.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="offline inlineblock">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar8.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="offline inlineblock">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar9.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="online inlineblock">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar5.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="offline inlineblock">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar4.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="offline inlineblock">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar3.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="online inlineblock">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar2.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="offline inlineblock">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img class="media-object " src="../assets/images/xs/avatar1.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="tab-pane slideLeft" id="activity">
            <div className="slim_scroll">
                <div className="card user_activity">
                    <h6>Recent Activity</h6>
                    <div className="streamline b-accent">
                        <div className="sl-item">
                            <img class="user rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="" />
                            <div className="sl-content">
                                <h5 className="m-b-0">Admin Birthday</h5>
                                <small>Jan 21 <a href="javascript:void(0);" className="text-info">Sophia</a>.</small>
                            </div>
                        </div>
                        <div className="sl-item">
                            <img class="user rounded-circle" src="../assets/images/xs/avatar5.jpg" alt=""></img>
                            <div className="sl-content">
                                <h5 className="m-b-0">Add New Contact</h5>
                                <small>30min ago <a href="javascript:void(0);">Alexander</a>.</small>
                                <small><strong>P:</strong> +264-625-2323</small>
                                <small><strong>E:</strong> maryamamiri@gmail.com</small>
                            </div>
                        </div>
                        <div className="sl-item">
                            <img class="user rounded-circle" src="../assets/images/xs/avatar6.jpg" alt="" />
                            <div className="sl-content">
                                <h5 className="m-b-0">Code Change</h5>
                                <small>Today <a href="javascript:void(0);">Grayson</a>.</small>
                                <small>The standard chunk of Lorem Ipsum used since the 1500s is reproduced</small>
                            </div>
                        </div>
                        <div className="sl-item">
                            <img class="user rounded-circle" src="../assets/images/xs/avatar7.jpg" alt="" />
                            <div className="sl-content">
                                <h5 className="m-b-0">New Email</h5>
                                <small>45min ago <a href="javascript:void(0);" className="text-info">Fidel Tonn</a>.</small>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className="card">
                    <h6>Recent Attachments</h6>
                    <ul className="list-unstyled activity">
                        <li>
                            <a href="javascript:void(0)">
                                <i className="zmdi zmdi-collection-pdf l-blush"></i>                    
                                <div className="info">
                                    <h4>info_258.pdf</h4>                    
                                    <small>2MB</small>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <i className="zmdi zmdi-collection-text l-amber"></i>                    
                                <div className="info">
                                    <h4>newdoc_214.doc</h4>                    
                                    <small>900KB</small>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <i className="zmdi zmdi-image l-parpl"></i>                    
                                <div className="info">
                                    <h4>MG_4145.jpg</h4>                    
                                    <small>5.6MB</small>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <i className="zmdi zmdi-image l-parpl"></i>                    
                                <div className="info">
                                    <h4>MG_4100.jpg</h4>                    
                                    <small>5MB</small>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <i className="zmdi zmdi-collection-text l-amber"></i>                    
                                <div className="info">
                                    <h4>Reports_end.doc</h4>                    
                                    <small>780KB</small>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <i className="zmdi zmdi-videocam l-turquoise"></i>                    
                                <div className="info">
                                    <h4>movie2018.MKV</h4>                    
                                    <small>750MB</small>
                                </div>
                            </a>
                        </li>                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</aside>
        </>
    )
}

export default Sidebar;
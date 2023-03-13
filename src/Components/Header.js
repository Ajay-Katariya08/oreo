import '../assets2/plugins/bootstrap/css/bootstrap.min.css';
import '../assets1/css/main.css';
import '../assets1/css/authentication.css';
import '../assets1/css/color_skins.css';
function Header(){
    return(
        <>              
<body className="theme-cyan authentication sidebar-collapse">
{/* <!-- Navbar --> */}
<nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
    <div className="container">        
        <div className="navbar-translate n_logo">
            <a class="navbar-brand" href="javascript:void(0);" title="" target="_blank">Oreo</a>
            <button class="navbar-toggler" type="button">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
            </button>
        </div>
        <div className="navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                    <a class="nav-link" href="javascript:void(0);">Search Result</a>
                </li>
                <li className="nav-item">
                    <a class="nav-link" title="Follow us on Twitter" href="javascript:void(0);" target="_blank">
                        <i className="zmdi zmdi-twitter"></i>
                        <p className="d-lg-none d-xl-none">Twitter</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a class="nav-link" title="Like us on Facebook" href="javascript:void(0);" target="_blank">
                        <i className="zmdi zmdi-facebook"></i>
                        <p className="d-lg-none d-xl-none">Facebook</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a class="nav-link" title="Follow us on Instagram" href="javascript:void(0);" target="_blank">                        
                        <i className="zmdi zmdi-instagram"></i>
                        <p className="d-lg-none d-xl-none">Instagram</p>
                    </a>
                </li>                
                <li className="nav-item">
                    <a class="nav-link btn btn-white btn-round" href="Register">SIGN UP</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</body>

        </>
    )
}
export default Header;
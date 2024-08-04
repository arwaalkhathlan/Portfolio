import { Outlet, Link } from "react-router-dom";
import "../../css/Header.css"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg custom-navbar" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/">Arwa Alkhathlan</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <Link className="nav-link " to="/">Home</Link>
                            <Link className="nav-link" to="/Projects">Projects</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Header;
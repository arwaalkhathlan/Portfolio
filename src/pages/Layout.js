import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>

        
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">

            <Link class="navbar-brand" to="/">Arwa Alkhathlan</Link>

            

            <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>



            <div class="collapse navbar-collapse"  id="navbarNav">
            <div class="navbar-nav">

                <Link class="nav-link active" to= "/">Home</Link>
                <Link class="nav-link" to="/blogs">Blogs</Link>
                <Link class="nav-link" to = "/contact">Contact</Link>

            </div>

            </div>
            </div>
        </nav>
        <Outlet />

        </>
    )

}

export default Layout;
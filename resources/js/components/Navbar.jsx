import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#courses">Shop</a></li>
                    <li><a href="#tutors">Blog</a></li>
                    <li><a href="#partners">Pages</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="/admin/login" className="tbl-biru">Sign In</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

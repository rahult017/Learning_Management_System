import { Link } from 'react-router-dom'

function HeaderScreen() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Learn Online</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="container">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/course/">Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/teacher/">Teacher</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about/">About Us</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/login/">Login</Link></li>
            <li><Link className="dropdown-item" to="/register/">Register</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/dashboard/">Dashboard</Link></li>
            <li><Link className="dropdown-item" to="/logout/">Logout</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
  
        </div>
      </nav>
    );
  }
  
  export default HeaderScreen;
  
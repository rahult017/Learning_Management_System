
import { Link } from "react-router-dom";

function SidebarScreen(){
    return (
        <div className="card">
            {/* <h5 className="card-header"> Dashboard </h5> */}
            <div className="list-group list-group-flush">
                <Link to="/dashboard/" className="list-group-item list-group-action"> Dashboard </Link>
                <Link to="/my-courses/"  className="list-group-item list-group-action">My Courses</Link>
                <Link to="/favourite-courses/"  className="list-group-item list-group-action">Favourite Courses</Link>
                <Link to="/recommended-courses/"  className="list-group-item list-group-action">Recommend Courses</Link>
                <Link to="/profile-settings/"  className="list-group-item list-group-action">Profile Settings</Link>
                <Link to="/change-password/"  className="list-group-item list-group-action">Change Password</Link>
                <Link to="/logout/"  className="list-group-item list-group-action text-danger"> Logout</Link>
            </div>
        </div>
    );
}

export default SidebarScreen;
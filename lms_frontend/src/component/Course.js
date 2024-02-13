import { Link } from "react-router-dom";


function CourseScreen(){
    return (
        <div className="container" style={{ marginTop: '70px' }}>
            <h3 className="pb-1 mb-4">Courses</h3>
            <div className="row mb-6">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1/"><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1/">Card Title </Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseScreen;
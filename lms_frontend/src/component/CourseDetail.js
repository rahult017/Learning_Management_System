import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import FetchDataComponent from "./FetchData";

function CourseDetailScreen() {
  const { id } = useParams();

  return (
    <div className="container" style={{ marginTop: '70px' }}>
        <div className="row">
        <FetchDataComponent url={`http://localhost:8000/course/${id}/`}
            render={(course) => {
              try {
                return (
                  <div className="row">
                    <div className="col-4">
                      <img src="/logo512.png" className="card-img-top" alt={course.title}/>
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title">{course.title}</h5>
                        <p className="card-text">{course.description}</p>
                        <p className="fw-bold">Course By: <Link to="#">Teacher</Link></p>
                        <p className="fw-bold">Level : {course.level}</p>
                        <p className="fw-bold">Duration: 3 hours 30 minutes</p>
                        <p className="fw-bold">Total Enrollment: 456 Students </p>
                        <p className="fw-bold">Rating: 4.5/5</p>
                        <p className="fw-bold">Fee: {course.course_fee} Rs</p>
                      </div>
                    </div>
                  </div>
                )
              } catch (error) {
                console.error("Error rendering data:", error);
                return <div>Error rendering data</div>;
              }

            }}
        />
            
        </div>
        {/* Course Videos*/}
        <div className="card mt-4">
            <h5 className="card-header">Course Videos</h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> Introduction 
                    <button className="btn btn-sm btn-danger float-end">
                        <i className="bi-youtube"></i>
                    </button>
                </li>
                <li className="list-group-item"> Introduction 
                    <button className="btn btn-sm btn-danger float-end">
                        <i className="bi-youtube"></i>
                    </button>
                </li>
                <li className="list-group-item"> Introduction 
                    <button className="btn btn-sm btn-danger float-end">
                        <i className="bi-youtube"></i>
                    </button>
                </li>
                <li className="list-group-item"> Introduction 
                    <button className="btn btn-sm btn-danger float-end">
                        <i className="bi-youtube"></i>
                    </button>
                </li>
                <li className="list-group-item"> Introduction 
                    <button className="btn btn-sm btn-danger float-end">
                        <i className="bi-youtube"></i>
                    </button>
                </li>
            </ul>
        </div>
        {/* End of Course Videos */}
        
        {/* Related Course */}
        <h3 className="pb-1 mb-4 mt-5">Related Courses </h3>
      <div className="row mb-6">
        <div className="col-md-3">
          <div className="card">
          <Link to="/detail/1/"><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1/">Card Title </Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <Link to="/detail/2/"><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/2/">Card Title </Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="/logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Card Title </a></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="/logo512.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Card Title </a></h5>
            </div>
          </div>
        </div>
      </div>
      {/* End Related Course */}

    </div>
  );
}

export default CourseDetailScreen;

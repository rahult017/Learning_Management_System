import React from 'react';
import FetchDataComponent from './FetchData';
import { Link } from 'react-router-dom';

function CourseScreen(){
    return (
        <div className="container" style={{ marginTop: '70px' }}>
            <h3 className="pb-1 mb-4">Courses</h3>
            <div className="row mb-6">
                <FetchDataComponent url="http://localhost:8000/course/" 
                    render={(data) => {
                        try {
                            return data.map(course => (
                                <div className="col-md-3" key={course.id}>
                                    <div className="card">
                                        <Link to={`/detail/${course.id}/`}>
                                            <img src={course.image} className="card-img-top" alt={course.title} />
                                        </Link>
                                        <div className="card-body">
                                            <Link to={`/detail/${course.id}/`}><h5 className="card-title">{course.title}</h5></Link>
                                            <p className="card-text">{course.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ));
                        } catch (error){
                            console.error("Error rendering data:", error);
                            return <div>Error rendering data</div>;
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default CourseScreen;

//import { Link } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FetchDataComponent from './FetchData';

function TeacherScreen(){
    
    return (
        <div className="container" style={{ marginTop: '70px' }}>
            <h3 className="pb-1 mb-4">Teacher</h3>
            <div className="row mb-6">
                <FetchDataComponent url="http://localhost:8000/teacher/"
                    render={(data) =>{
                        try {
                            return data.map(teacher => (
                                <div className="col-md-3" key={teacher.id}>
                                    <div className="card">
                                        <img src={teacher.image} className="card-img-top" alt={teacher.first_name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{teacher.first_name} {teacher.last_name}</h5>
                                            <p className="card-text">hello</p>
                                        </div>
                                    </div>
                                </div>
                            ))

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

export default TeacherScreen;
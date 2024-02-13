import { initializeDataTable } from "../DataTable";
import React, { useEffect } from 'react';
import SidebarScreen from "./Sidebar";

function MyCourseScreen(){
    useEffect(() => {
        const table = document.getElementById('example');
        if (table) {
          initializeDataTable(table);
        }
      }, []);
    return (
        <div className="container" style={{ marginTop: '70px' }}>
            <div className="row">
                <aside className="col-md-3">
                   <SidebarScreen/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header"> My Courses </h5>
                        <div className="card-body">
                        <table id="example" className="table table-striped table-bordered">
                            <thead> 
                                <tr>
                                    <th> Course Name </th>
                                    <th> Duration </th>
                                    <th> Level </th>
                                    <th> Price </th>
                                    <th> Created By </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> PYthon </td>
                                    <td> 6 weeks </td>
                                    <td> Intermediate </td>
                                    <td> $49.99 </td>
                                    <td> Rahul </td>
                                    <td> UnEnroll </td>
                                </tr>
                                <tr>
                                    <td> PHP </td>
                                    <td> 6 weeks </td>
                                    <td> Intermediate </td>
                                    <td> $49.99 </td>
                                    <td> Suraj </td>
                                    <td> UnEnroll </td>
                                </tr>
                                <tr>    
                                    <td> Django </td>
                                    <td> 6 weeks </td>
                                    <td> Intermediate </td>
                                    <td> $49.99 </td>
                                    <td> Raj </td>
                                    <td> UnEnroll </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                </section>
            </div>
            </div>                 
    );
}

export default MyCourseScreen;
import SidebarScreen from "./Sidebar";


function ChangePasswordScreen(){
    return (
        <div className="container" style={{ marginTop: '70px' }}>
            <div className="row">
                <aside className="col-md-3">
                   <SidebarScreen/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header"> Change Password </h5>
                        <div className="card-body">
                            <form>
                                <div class="mb-3 row">
                                    <label for="exampleInputPassword1" class="form-label"> Password </label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <br/>
                                <button type="submit" class="btn btn-primary">Update</button>
                                </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>      
    )
}

export default ChangePasswordScreen;
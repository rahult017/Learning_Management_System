import SidebarScreen from "./Sidebar";


function ProfileSettingScreen(){
    return (
        <div className="container" style={{ marginTop: '70px' }}>
            <div className="row">
                <aside className="col-md-3">
                   <SidebarScreen/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header"> Profile Settings </h5>
                        <div className="card-body">
                            <form>
                                <div class="mb-3 row">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3 row">
                                    <label for="exampleInputPassword1" class="form-label">Profile Photo</label>
                                    <input type="file" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3 row">
                                    <label for="exampleInputPassword1" class="form-label">Interest</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <br/>
                                <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>      
    )
}

export default ProfileSettingScreen;
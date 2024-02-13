import SidebarScreen from "./Sidebar";


function DashboardScreen(){
    return (
        <div className="container" style={{ marginTop: '70px' }}>
            <div className="row">
                <aside className="col-md-3">
                   <SidebarScreen/>
                </aside>
                <section className="col-md-9">
                    Dashboard
                </section>
            </div>
        </div>      
    )
}

export default DashboardScreen;
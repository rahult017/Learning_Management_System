import HeaderScreen from "./Header";
import HomeScreen from "./Home";
import AboutScreen from "./About";
import CourseDetailScreen from "./CourseDetail";
import DashboardScreen from "./User/Dashboard";
import LoginScreen from "./User/Login";
import LogoutScreen from "./User/logout";
import RegisterScreen from "./User/Register";
import FooterScreen from "./footer";
import {Routes,Route} from 'react-router-dom'


function MainScreen() {
    return (
      <div className="App">
        <HeaderScreen/>
        <Routes>
          <Route path="/" element={ <HomeScreen/> }/>
          <Route path="/about/" element={ <AboutScreen/> }/>
          <Route path="/detail/:course_id/" element={ <CourseDetailScreen/> }/>
          <Route path="/dashboard/" element={ <DashboardScreen/> }/>
          <Route path="/login/" element={ <LoginScreen/> }/>
          <Route path="/logout/" element={ <LogoutScreen/> }/>
          <Route path="/register/" element={ <RegisterScreen/> }/>
        </Routes>
        
        <FooterScreen/>
      </div>
    );
  }
  
  export default MainScreen;
  
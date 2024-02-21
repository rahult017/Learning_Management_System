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
import MyCourseScreen from "./User/MyCourse";
import FavouriteCourseScreen from "./User/FavouriteCourse";
import RecommendedCourseScreen from "./User/RecommendCourse";
import ProfileSettingScreen from "./User/ProfileSetting";
import ChangePasswordScreen from "./User/ChangePassword";
import CourseScreen from "./Course";
import TeacherScreen from "./Teacher";


function MainScreen() {
    return (
      <div className="App">
        <HeaderScreen/>
        <Routes>
          <Route path="/" element={ <HomeScreen/> }/>
          <Route path="/about/" element={ <AboutScreen/> }/>
          <Route path="/detail/:id/" element={ <CourseDetailScreen/> }/>
          <Route path="/dashboard/" element={ <DashboardScreen/> }/>
          <Route path="/login/" element={ <LoginScreen/> }/>
          <Route path="/logout/" element={ <LogoutScreen/> }/>
          <Route path="/register/" element={ <RegisterScreen/> }/>
          <Route path="/course/" element={ <CourseScreen/> }/>
          <Route path="/my-courses/" element={ <MyCourseScreen/> } />
          <Route path="/favourite-courses/" element={ <FavouriteCourseScreen/> } />
          <Route path="/recommended-courses/" element={ <RecommendedCourseScreen/> } />
          <Route path="/teacher/" element={ <TeacherScreen/> }/>
          <Route path="/profile-settings/" element={ <ProfileSettingScreen/> } />
          <Route path="/change-password/" element={ <ChangePasswordScreen/> } />
        </Routes>
        
        <FooterScreen/>
      </div>
    );
  }
  
  export default MainScreen;
  
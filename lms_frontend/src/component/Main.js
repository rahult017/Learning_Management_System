import HeaderScreen from "./Header";
import HomeScreen from "./Home";
import FooterScreen from "./footer";

function MainScreen() {
    return (
      <div className="App">
        <HeaderScreen/>
        <HomeScreen/>
        <FooterScreen/>
      </div>
    );
  }
  
  export default MainScreen;
  
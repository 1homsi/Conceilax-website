import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
//Components
import NavBar from "./components/NavBar/NavBar";
import FourOFourScreen from "./views/404Screen";
// Screen Imports
import AboutScreen from "./views/AboutScreen";
import ContactUs from "./views/ContactUs";
import HomeScreen from "./views/HomeScreen";
import Services from "./views/Services";
import WebsiteExampleScreen from "./views/WebsiteExampleScreen";
import WhyUsScreen from "./views/WhyUsScreen";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <main>
          <Switch>
            <Route path="/about" component={AboutScreen} exact></Route>
            <Route path="/services" component={Services}></Route>
            <Route path="/contact-us" component={ContactUs}></Route>
            <Route path="/website-exmaples" component={WebsiteExampleScreen}></Route>
            <Route path="/why-us" component={WhyUsScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route component={FourOFourScreen} exact></Route>
          </Switch>
        </main>
        <Footer></Footer>
        <br></br>
      </div>
    </BrowserRouter>
  );
}
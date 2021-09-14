import Header from "./ui/Header";
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from './ui/Theme'
import Footer from "./ui/Footer";
import { useState } from "react";
import LandingPage from "./ui/LandingPage";
import Services from "./ui/Services";
import CustomSoftware from "./ui/CustomSoftware";
import MobileApps from "./ui/MobileApps";
import Websites from "./ui/Websites";
import Revolution from "./ui/Revolution";
function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path="/" render={(props) => <LandingPage  {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/services" component={(props) => <Services  {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/customsoftware" component={(props) => <CustomSoftware  {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/mobileapps" component={(props) => <MobileApps  {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/websites" component={(props) => <Websites  {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/revolution" component={(props) => <Revolution  {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/about" component={() => <div>About</div>}/>
          <Route exact path="/contact" component={() => <div>Contact</div>}/>
          <Route exact path="/estimate" component={() => <div>Estimate</div>}/>
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>


  );
}

export default App;

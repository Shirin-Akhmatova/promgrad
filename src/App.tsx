import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import MainSlider from "./components/mainSlider/MainSlider";

import OurWork from "./components/ourWork/OurWork";

const App = () => {
  return (
    <div>
      <Header />
      <MainSlider />
      <AboutUs/>
      <OurWork />
      <Footer />
    </div>
  );
};

export default App;

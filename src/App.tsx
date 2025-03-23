import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import MainSlider from "./components/mainSlider/MainSlider";

const App = () => {
  return (
    <div>
      <Header />
      <MainSlider />
      <AboutUs/>
      <Footer />
    </div>
  );
};

export default App;

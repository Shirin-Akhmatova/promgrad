import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import OurContacts from "./components/OurContacts/OurContacts";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/header/Header";
import MainSlider from "./components/mainSlider/MainSlider";
import OurWork from "./components/ourWork/OurWork";

const App = () => {
  return (
    <div>
      <Header />
      <MainSlider />
      <AboutUs />
      <OurWork />
      <OurContacts />
      <Footer />
      <ToastContainer style={{ zIndex: 1000000 }} />
    </div>
  );
};

export default App;

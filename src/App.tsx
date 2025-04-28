import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Telegram from "./assets/icons/Icons-21.svg";
import WhatsApp from "./assets/icons/Icons-22.svg";
import OurContacts from "./components/OurContacts/OurContacts";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/header/Header";
import MainSlider from "./components/mainSlider/MainSlider";
import OurWork from "./components/ourWork/OurWork";
import OurResults from "./components/OurResults/OurResults";
import OurSpecialists from "./components/OurSpecialists/OurSpecialists";
import "./App.scss";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <MainSlider />
      <AboutUs />
      <OurWork />
      <OurResults />
      <OurSpecialists />
      <OurContacts />
      <Footer />
      <div className="btns">
        <div className="whatsapp-button">
          <a target="_blank" href="https://wa.me/996505230605">
            <img src={WhatsApp} alt="whatsApp" />
          </a>
        </div>
        <div className="telegram-button">
          <a target="_blank" href="https://t.me/Arsenoverkill">
            <img src={Telegram} alt="telegram" />
          </a>
        </div>
      </div>
      <ToastContainer style={{ zIndex: 1000000 }} />
    </div>
  );
};

export default App;

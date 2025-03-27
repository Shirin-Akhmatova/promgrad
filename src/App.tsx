import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import OurContacts from "./components/OurContacts/OurContacts";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/header/Header";
import MainSlider from "./components/mainSlider/MainSlider";
import OurWork from "./components/ourWork/OurWork";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "./App.scss";
import { useTranslation } from "react-i18next";
import Map from "./components/Map/Map";

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <MainSlider />
      <AboutUs />
      <OurWork />
      <OurContacts />
      {/* <Map /> */}
      <Footer />

      <FloatingWhatsApp
        phoneNumber="+996505230605"
        accountName={t("whatsapp.accountName")}
        avatar="https://old.avangardstyle.kg/wp-content/uploads/2020/03/Spanish-house-main.jpg"
        allowClickAway={true}
        chatMessage={t("whatsapp.chatMessage")}
        placeholder={t("whatsapp.placeholder")}
        className="whatsapp-button"
      />
      <ToastContainer style={{ zIndex: 1000000 }} />
    </div>
  );
};

export default App;

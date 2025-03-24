import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import OurContacts from "./components/OurContacts/OurContacts";

const App = () => {
  return (
    <div>
      <OurContacts />
      <Footer />
      <ToastContainer style={{ zIndex: 1000000 }} />
    </div>
  );
};

export default App;

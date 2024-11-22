import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import FacebookMessagePage from "./pages/FacebookMessagePage/FacebookMessagePage.jsx";
import FacebookPostPage from "./pages/FacebookPostPage/FacebookPostPage.jsx";
import WhatsAppPage from "./pages/WhatsappPage/WhatsappPage.jsx";

function App() {
  console.log("hello");

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<FacebookPostPage />} />
        <Route path="/facebook-message" element={<FacebookMessagePage />} />
        <Route path="/whatsapp" element={<WhatsAppPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Lock from "./pages/Lock";
import Unlock from "./pages/Unlock";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Lock />} />
        <Route path="/unlock" element={<Unlock />} />
        <Route path="/unlock/:shortid" element={<Unlock />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

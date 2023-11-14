import { BrowserRouter, Routes, Route } from "react-router-dom";
import LockUrl from "./pages/LockUrl";
import UnlockUrl from "./pages/UnlockUrl";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<LockUrl />} />
        <Route path="/unlock" element={<UnlockUrl />} />
      </Routes>
    </BrowserRouter>
  );
}

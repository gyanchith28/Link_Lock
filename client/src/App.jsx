import { BrowserRouter, Routes, Route } from "react-router-dom";
import LockUrl from "./pages/LockUrl";
import UnlockUrl from "./pages/UnlockUrl";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LockUrl />} />
        <Route path="/unlock" element={<UnlockUrl />} />
      </Routes>
    </BrowserRouter>
  );
}

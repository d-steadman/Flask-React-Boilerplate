import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasePage from "./pages/BasePage";
import LandingPage from "./pages/LandingPage";
import BackendTest from "./pages/BackendTest";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<LandingPage />} />
          <Route path="test" element={<BackendTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

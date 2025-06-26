import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LegalNotice from "./pages/AvisoLegal";
import Login from "./pages/login";
import Home from "./pages/home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="/Aviso-Legal" element={<LegalNotice />} />
      </Route>
      <Route path="admin/login" element={<Login />} />
    </>
  )
);

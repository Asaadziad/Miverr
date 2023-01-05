import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Programming from "./components/categories/Programming";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import SignIn from "./components/profile/SignIn";
import SignUp from "./components/profile/SignUp";
import Shop from "./components/shop/Shop";

interface RouteSwitchProps {}

const RouteSwitch: FunctionComponent<RouteSwitchProps> = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/programming" element={<Programming />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;

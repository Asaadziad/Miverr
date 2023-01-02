import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Programming from "./components/categories/Programming";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import SignIn from "./components/profile/SignIn";
import SignUp from "./components/profile/SignUp";
import Shop from "./components/shop/Shop";

interface RouteSwitchProps {}

const RouteSwitch: FunctionComponent<RouteSwitchProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/programming" element={<Programming />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

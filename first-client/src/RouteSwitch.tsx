import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";

interface RouteSwitchProps {}

const RouteSwitch: FunctionComponent<RouteSwitchProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

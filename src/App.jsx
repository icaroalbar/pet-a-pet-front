import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./components/pages/Home";
import { Register } from "./components/pages/Auth/Register";
import { Login } from "./components/pages/Auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Nav } from "./components/Layout/Navbar";
import { Footer } from "./components/Layout/Footer";

import { Home } from "./components/pages/Home";
import { Register } from "./components/pages/Auth/Register";
import { Login } from "./components/pages/Auth/Login";

import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Nav />
        <div className="mx-auto max-w-7xl pt-4 pb-8 px-12 min-h-[100vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
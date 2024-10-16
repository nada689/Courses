import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Nav";
import "./App.css";
import Home from "./Home";
import Edit from "./Edit";
import Create from "./Create";
import Show from "./Show";
import Contact from "./Contact";
import Class from "./Class";
function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Show />} />
        <Route path="/:id/edit" element={<Edit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/class" element={<Class />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Courses } from "./pages/courses/Courses";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Partners } from "./pages/partners/Partners";
import { Transparency } from "./pages/transparency/Transparency";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}
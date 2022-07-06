import { Routes, Route } from "react-router-dom";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { EducModules } from "./pages/educModules/EducModules";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { ModuleContent } from "./pages/module/ModuleCourse";
import { Partners } from "./pages/partners/Partners";
import { Transparency } from "./pages/transparency/Transparency";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<EducModules />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/module/*" element={<ModuleContent />} />
        </Routes>
    );
}
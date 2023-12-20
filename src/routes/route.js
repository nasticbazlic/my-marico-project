
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/Home-page/home-page";
import Blog from "../pages/Blog/blog";
import About from "../pages/About/about";
import Pricing from "../pages/pricing/pricing";
import Login from "../pages/Login";
import SignUp from "../pages/Sign-up";

const RouterCom = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/pracing" element={<Pricing />} />
            <Route path='/login' element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    )
}
export default RouterCom;
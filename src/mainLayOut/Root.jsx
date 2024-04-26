import { Outlet } from "react-router-dom";
import Nav from "../shareComponents/Nav";
import Footer from "../shareComponents/Footer";

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="min-h-[calc(100vh-288px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;
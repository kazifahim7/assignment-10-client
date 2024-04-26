import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../shareComponents/Nav";
import Footer from "../shareComponents/Footer";

const Root = () => {
    const navigation=useNavigation()
    return (
        <div>
            <Nav></Nav>
            <div className="min-h-[calc(100vh-288px)]">
                {
                    navigation.state === "submitting"
                        ? <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div> : <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;
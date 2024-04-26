import { Link } from "react-router-dom";
import Slider from "./Slider";



const Banner = () => {
    return (
        <div>
            <div className="flex items-center flex-col-reverse lg:flex-row-reverse text-green-50 bg-[#0a2233] ">
                <div className="p-10">
                    <Slider></Slider>

                </div>
                <div className=" flex p-10 space-y-4 flex-col justify-start items-start">
                    <h1 className="text-5xl text-[#f05f64] font-extrabold">Travel and Adventure</h1>
                    <p>Adventure.Travel is the go-to source for information on adventure travel that prioritizes sustainability, serves as a force for good, and transforms people and places. From research and trends to best travel practices, ideal gear, and destinations and operators with outstanding commitments to responsible travel, we have everything you need to make sure your adventures align with your values.</p>
                    <p className="text-2xl font-bold">Where would you Like to GO ?</p>
                    <Link to={'/gallery'}><button className="btn w-full md:w-36 border-none bg-[#f85359]">All Tourists Spot</button></Link>

                </div>

            </div>
        </div>
    )
};

export default Banner;
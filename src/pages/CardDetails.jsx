
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const CardDetails = () => {
    const singleData=useLoaderData()
    const navigate=useNavigate()

    const handleClick=()=>{
        navigate(-1);

    }
    



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={singleData.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h2 className="card-title">tourists_spot_name : {singleData.tourists_spot_name} </h2>
                        <p>Country : {singleData.country}</p>
                        <p>Average_cost : {singleData.average_cost} </p>
                        <p>TotalVisitorsPerYear :{singleData.totalVisitorsPerYear} </p>
                        <p>Travel_time :{singleData.travel_time} Days</p>
                        <p>Seasonality :{singleData.seasonality} </p>
                        <p className="py-6">Description: {singleData.description}</p>
                        <p className="flex items-center gap-4"><FaLocationDot /> {singleData.location}</p>
                        <div className="flex justify-center items-center">
                            <button onClick={handleClick} className="btn rounded-full bg-[#e8604c] "><FaArrowLeft /></button>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CardDetails;

import { Link } from "react-router-dom";


const Card = ({spot}) => {
    const themes=localStorage.getItem('theme')
    

    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img src={spot.image} alt="image" className="h-44 w-full" /></figure>
                <div className={`card-body ${themes==='light'? "text-black":"text-white"}`}>
                    <h2 className="card-title">tourists_spot_name : {spot.tourists_spot_name} </h2>
                    <p>Average_cost : {spot.average_cost} $</p>
                    <p>TotalVisitorsPerYear :{spot.totalVisitorsPerYear} </p>
                    <p>Travel_time :{spot.travel_time} Days</p>
                    <p>Seasonality :{spot.seasonality} </p>
                    <div className="card-actions justify-end">
                        <Link to={`/spots/${spot._id}`}><button className="btn  border-none bg-[#e8604c]">View Details</button></Link>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Card;
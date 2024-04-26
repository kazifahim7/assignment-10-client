import { useEffect, useState } from "react";
import Card from "./Card";

const TouristsSpotsSection = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/spots')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])



    return (
        <div className="my-5">
            <h1 className="font-extrabold text-5xl text-center">Tourists Spots Section</h1>
            <p className="text-center pt-4">Embark on a journey through the most mesmerizing destinations on the planet! Our Tourist Spots section guides you through an exquisite collection of places, <br /> each brimming with unique cultures, breathtaking landscapes, and unforgettable experiences.  From the bustling streets of vibrant cities <br /> to serene vistas in hidden gems, this guide is your gateway to exploring the extraordinary. </p>
            <div className="max-w-7xl pt-10 mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.slice(0, 6).map(spot => <Card key={spot._id} spot={spot}></Card>)
                }
            </div>
            


            
        </div>
    );
};

export default TouristsSpotsSection;
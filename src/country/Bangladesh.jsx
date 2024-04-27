import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../pages/Card";


const Bangladesh = () => {
    const [countrySpot,setCountrySpot]=useState([])
    const country=useLoaderData()

    useEffect(()=>{
        fetch('http://localhost:5000/spots')
        .then(res=>res.json())
        .then(data=>{
            const remaining = data.filter(item => item.country==country.country_name)
            setCountrySpot(remaining)
        })
    },[country?.country_name])






    return (
        <div>
            <h1 className="text-center font-extrabold text-xl md:text-5xl">{country.country_name}Tourists Spot</h1>
            <p className="text-center p-7">{country.description}</p>


            <div className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" >
                {
                    countrySpot.map(spot=> <Card key={spot._id} spot={spot} ></Card>)
                }


            </div>







            
        </div>
    );
};

export default Bangladesh;
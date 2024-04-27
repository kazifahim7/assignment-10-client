import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";


const Countries = () => {
    const [country,setCountry]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/country')
        .then(res=>res.json())
        .then(data=>setCountry(data))


    },[])



    return (
        <div>
            <h1 className=" text-2xl md:text-5xl font-bold text-center">Countries</h1>
            <p className="text-center text-xl py-5">As you set off on Southeast Asia travel, prepare to be captivated by the wonders that each destination uncovers. In these Southeast Asia travel destinations, you can indulge in the spectacles of natural beauty and immerse yourself in the profound culture. <br /> Come with us as we walk you through the most captivating sites in Southeast Asia.</p>
            <div className={`flex justify-center items-center ${country ? 'hidden' : 'block'} `}>
                <span className="loading loading-bars loading-lg"></span>
            </div>

            <div className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    country.map(item => <CountryCard item={item} key={item.id}></CountryCard>)
                }
            </div>
            
        </div>
    );
};

export default Countries;
import { useEffect, useState } from "react";
import Card from "./Card";
import { Cursor, useTypewriter } from 'react-simple-typewriter'


const TouristsSpotsSection = () => {
    const [text] = useTypewriter({
        words: ['Spots', 'Section'],
        loop: {}
    })





    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const [dataInUI, setDataInUi] = useState(false)
    useEffect(() => {
        fetch('https://server-site-mu-seven.vercel.app/spots')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    setTimeout(() => {
        setLoader(false)
        setDataInUi(true)
    }, 6000)



    return (
        <div className="my-5">




            <h1 className="font-extrabold text-5xl text-center">

                Tourists
                <span className="text-green-600">
                    {text}
                    <Cursor cursorColor='green' />

                </span>


            </h1>






            <p className="text-center pt-4">Embark on a journey through the most mesmerizing destinations on the planet! Our Tourist Spots section guides you through an exquisite collection of places, <br /> each brimming with unique cultures, breathtaking landscapes, and unforgettable experiences.  From the bustling streets of vibrant cities <br /> to serene vistas in hidden gems, this guide is your gateway to exploring the extraordinary. </p>

            <div className={`flex justify-center items-center ${loader ? 'block' : 'hidden'} `}>
                <span className="loading loading-bars loading-lg"></span>
            </div>





            <div className={`max-w-7xl pt-10 mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${dataInUI ? 'block' : 'hidden'}`}>
                {
                    data.slice(0, 6).map(spot => <Card key={spot._id} spot={spot}></Card>)
                }
            </div>










        </div>
    );
};

export default TouristsSpotsSection;
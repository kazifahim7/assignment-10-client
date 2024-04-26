import { useEffect, useState } from "react";
import Card from "./Card";

const AllSpots = () => {
    const [data, setData] = useState([])
    const [loader,setLoader]=useState(true)
    const [dataInUI,setDataInUi]=useState(false)


    useEffect(() => {
        fetch('http://localhost:5000/spots')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    setTimeout(()=>{
        setLoader(false)
        setDataInUi(true)
    },4000)



    return (
        <div className="" >
            <h1 className="text-5xl font-extrabold text-center">All Tourists Spot</h1>
            <p className="text-center py-3">Are you hunting for the best tourist places in Southeast Asia <br />
                that are sure to leave you stunned with their ethereal beauty?</p>


            <div className={`flex justify-center items-center ${loader?'block':'hidden'} `}>
                <span className="loading loading-bars loading-lg"></span>
                </div>

            <div className={`max-w-7xl pt-10 mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${dataInUI?'block':'hidden'}`}>
                {
                    data.map(spot => <Card key={spot._id} spot={spot}></Card>)
                }
            </div>  


        </div>
    );
};

export default AllSpots;
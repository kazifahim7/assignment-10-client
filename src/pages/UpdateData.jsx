import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'


const UpdateData = () => {
    const latestData=useLoaderData()
    const dataUPdate = e => {
        e.preventDefault()
        const image = e.target.image.value;
        const tourists_spot_name = e.target.tourists_spot_name.value;
        const country_Name = e.target.country_Name.value;
        const country = country_Name.toLowerCase();

        const location = e.target.location.value;
        const average_cost = e.target.average_cost.value;
        const seasonality = e.target.seasonality.value;
        const travel_time = e.target.travel_time.value;
        const totalVisitorsPerYear = e.target.totalVisitorsPerYear.value;
        const description = e.target.short_description.value;
        const data = {
            
            image,
            tourists_spot_name,
            country,
            location,
            average_cost,
            seasonality,
            travel_time,
            totalVisitorsPerYear,
            description
        }
        console.log(data)
        fetch(`http://localhost:5000/spots/${latestData?._id}`,{
            method:"PUT",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount>0){
                Swal.fire({
                    title: "Good job!",
                    text: "added!",
                    icon: "success"
                });

                e.target.reset()

            }
        })



    }






    return (
        <div className="container mx-auto p-10">
            <h1 className="text-center font-extrabold text-2xl md:text-5xl">Update Section</h1>
            <p className="text-center text-xl py-3">In this section ,you can update your data as early</p>


            <form onSubmit={dataUPdate} className="w-full grid md:grid-cols-1 lg:grid-cols-2 gap-4 border p-5 rounded-2xl">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">image</span>
                    </label>
                    <input type="text" name="image" defaultValue={latestData.image} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">tourists_spot_name</span>
                    </label>
                    <input type="text" name="tourists_spot_name"  defaultValue={latestData.tourists_spot_name} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">country_Name</span>
                    </label>
                    <input type="text" name="country_Name" defaultValue={latestData.country} placeholder="country_Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">location</span>
                    </label>
                    <input type="text" name="location" 
                    defaultValue={latestData.location} placeholder="" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Average_cost</span>
                    </label>
                    <input type="number" name="average_cost" defaultValue={latestData.average_cost} placeholder="average_cost" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">seasonality</span>
                    </label>
                    <input type="text" name="seasonality" placeholder="season name" className="input input-bordered" defaultValue={latestData.seasonality} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">travel_time</span>
                    </label>
                    <input type="number" name="travel_time" placeholder="travel_time" className="input input-bordered" defaultValue={latestData.travel_time} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">TotalVisitorsPerYear</span>
                    </label>
                    <input type="number" name="totalVisitorsPerYear" placeholder="totalVisitorsPerYear" defaultValue={latestData.totalVisitorsPerYear} className="input input-bordered" required />
                </div>
                <label className="form-control lg:col-span-2">
                    <div className="label">
                        <span className="label-text">short description</span>

                    </div>
                    <textarea name="short_description" className="textarea textarea-bordered h-24" defaultValue={latestData.description} placeholder="short description"></textarea>
                </label>


                <button className="btn bg-[#e8604c] lg:col-span-2">Update</button>



            </form>
            
        </div>
    );
};

export default UpdateData;

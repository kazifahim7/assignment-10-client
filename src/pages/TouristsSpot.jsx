import { useRef } from "react";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const TouristsSpot = () => {
    const nameRef = useRef()
    const emailRef = useRef()





    const dataAdd = e => {
        e.preventDefault()

        const name = nameRef.current.value;
        const email = emailRef.current.value;
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
            name,
            email,
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

        fetch('https://server-site-mu-seven.vercel.app/spots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.insertedId) {
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
        <div className="max-w-7xl mx-auto w-full lg:w-1/2  my-3">
            <h1 className="text-4xl font-bold text-center mt-3 pb-3">Add Tourists Spot</h1>



            <form onSubmit={dataAdd} className="w-full grid md:grid-cols-1 lg:grid-cols-2 gap-4 border p-5 rounded-2xl" >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input ref={nameRef} type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input ref={emailRef} type="email" placeholder="enter your current email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">image</span>
                    </label>
                    <input type="text" name="image" placeholder="image" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">tourists_spot_name</span>
                    </label>
                    <input type="text" name="tourists_spot_name" placeholder="tourists_spot_name" className="input input-bordered" required />
                </div>
                <div className="mt-3">
                    seasonality
                    <select name="seasonality" className="select  select-bordered w-full ">
                        <option disabled selected>seasonality</option>
                        <option>summer</option>
                        <option>rainy</option>
                        <option>autumn</option>
                        <option>late-autumn</option>
                        <option>winter</option>
                        <option>spring</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">location</span>
                    </label>
                    <input type="text" name="location" placeholder="location" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Average_cost</span>
                    </label>
                    <input type="number" name="average_cost" placeholder="average_cost" className="input input-bordered" required />
                </div>
                <div className="mt-3">
                    country
                    <select name="country_Name" className="select  select-bordered w-full ">
                        <option disabled selected>country</option>
                        <option>Bangladesh</option>
                        <option>Thailand</option>
                        <option>Indonesia</option>
                        <option>Malaysia</option>
                        <option>Vietnam</option>
                        <option>Cambodia</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">travel_time</span>
                    </label>
                    <input type="number" name="travel_time" placeholder="travel_time" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">TotalVisitorsPerYear</span>
                    </label>
                    <input type="number" name="totalVisitorsPerYear" placeholder="totalVisitorsPerYear" className="input input-bordered" required />
                </div>
                <label className="form-control lg:col-span-2">
                    <div className="label">
                        <span className="label-text">short description</span>

                    </div>
                    <textarea name="short_description" className="textarea textarea-bordered h-24" placeholder="short description"></textarea>
                </label>


                <button className="btn bg-[#e8604c] lg:col-span-2">ADD</button>










            </form>





        </div>
    );
};

export default TouristsSpot;
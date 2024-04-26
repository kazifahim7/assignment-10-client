
const TouristsSpot = () => {
    return (
        <div className="max-w-7xl mx-auto w-full lg:w-1/2  my-3">
            <h1 className="text-4xl font-bold text-center mt-3 pb-3">Add Tourists Spot</h1>



            <form  className="w-full grid md:grid-cols-1 lg:grid-cols-2 gap-4 border p-5 rounded-2xl" >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">country_Name</span>
                    </label>
                    <input type="text" name="country_Name" placeholder="country_Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">location</span>
                    </label>
                    <input type="text" name="location" placeholder="location" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                </div>
                <label className="form-control lg:col-span-2">
                    <div className="label">
                        <span className="label-text">Your bio</span>
                        
                    </div>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </label>


                <button className="btn bg-[#e8604c] lg:col-span-2">ADD</button>
               
                








            </form>




            
        </div>
    );
};

export default TouristsSpot;
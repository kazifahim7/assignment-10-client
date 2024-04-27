import Example from "./Example";

const Client = () => {
    return (
        <div>
            <h1 className="text-4xl font-extrabold mt-3 text-center">Clients Question</h1>

            <div className="md:flex md:justify-center md:items-center md:gap-10  border p-10 container mx-auto my-5">
                <div>
                <div className="collapse collapse-plus w-full  bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What safety measures are in place at the site
                    </div>
                    <div className="collapse-content">
                        <p>The safety of our visitors is our top priority. We have comprehensive security measures in place, including CCTV surveillance and security personnel patrolling the area. Additionally, all visitors must pass through a security checkpoint at the entrance.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What should I bring to my visit?
                    </div>
                    <div className="collapse-content">
                        <p>We recommend comfortable footwear as there is a lot of walking involved. Don’t forget your camera to capture the beautiful scenes, and consider a hat and sunscreen for sunny days. Outside food and beverages are not allowed, but you can purchase refreshments on-site.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Do you offer guided tours?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we provide guided tours at no additional cost. Tours are available in English, Spanish, and Mandarin, and start every hour on the hour from the main entrance.</p>
                    </div>
                </div>
                </div>
                    <div className="md:w-full">
                    <Example></Example>
                    </div>
               



            </div>


            
        </div>
    );
};

export default Client;

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const MoreSpots = () => {
    return (
        <div className="max-w-6xl mx-auto mt-20 space-y-8 mb-10">
            <h1 className="text-5xl font-bold text-center">Tourists Spots In Southeast Asia</h1>
            <p className="text-center">Southeast Asia is the geographical south-eastern region of Asia, consisting of the <br /> regions that are situated south of China, east of the Indian subcontinent, and north-west of mainland Australia which is part of Oceania.</p>
            <div className="grid justify-center items-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500" className="card h-full w-full  md:w-96 bg-[#fff5f5]  ">
                    <figure className="">
                        <img src="https://i.ibb.co/h2Xyccr/himel-roy-5d-AOAl38m6s-unsplash.jpg" alt="Shoes" className="" />
                    </figure>
                    <div className="card-body  items-center ">
                        <h2 className="card-title">Saint Martin’s Island , Bangladesh</h2>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1600" className="card h-full w-full  md:w-96 bg-[#fff5f5]  ">
                    <figure className="">
                        <img src="https://i.ibb.co/RHthSZK/sumit-chinchane-j-WKk-0-ZBUyg-unsplash.jpg" alt="" className="" />
                    </figure>
                    <div className="card-body  items-center ">
                        <h2 className="card-title capitalize">phuket , thailand</h2>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1700" className="card h-full w-full md:w-96 bg-[#fff5f5]  ">
                    <figure className="">
                        <img src="https://i.ibb.co/VTbBH6k/riduwan-gustama-Xc-GGf2-7mw-A-unsplash.jpg" alt="" className="" />
                    </figure>
                    <div className="card-body  items-center ">
                        <h2 className="card-title">Komodo National Park ,Indonesia</h2>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1800" className="card h-full w-full  md:w-96 bg-[#fff5f5]  ">
                    <figure className="">
                        <img src="https://i.ibb.co/PT1cRWg/simon-wiedensohler-W-5-BBOLCROA-unsplash.jpg" alt="" className="" />
                    </figure>
                    <div className="card-body  items-center ">
                        <h2 className="card-title">Cameron Highlands , malaysia</h2>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1900" className="card h-full w-full  md:w-96 bg-[#fff5f5]  ">
                    <figure className="">
                        <img src="https://i.ibb.co/TBnWXxH/hieu-do-quang-ow-U4-CVUv-Ey-M-unsplash.jpg" alt="" className="" />
                    </figure>
                    <div className="card-body  items-center ">
                        <h2 className="card-title">Hoi An Ancient Town , vietnam</h2>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card  h-full w-full  md:w-96 bg-[#fff5f5]  ">
                    <figure className="">
                        <img src="https://i.ibb.co/34yh3v4/peter-borter-9sa-up-CQJms-unsplash.jpg" alt="" className="" />
                    </figure>
                    <div className="card-body  items-center ">
                        <h2 className="card-title">siem reap , cambodia</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MoreSpots;


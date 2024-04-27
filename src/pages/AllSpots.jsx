import { useEffect, useState } from "react";
import Card from "./Card";
import { Cursor, useTypewriter } from "react-simple-typewriter";


const AllSpots = () => {
    const [datas, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const [dataInUI, setDataInUi] = useState(false)
    const [text, setText] = useState('all')
    const [texts] = useTypewriter({
        words: ['spot'],
        loop: {},
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })


    useEffect(() => {
        fetch('https://server-site-mu-seven.vercel.app/spots')
            .then(res => res.json())
            .then(data => {
                if (text === 'all') {
                    setData(data)
                }
                else if (text === 'lower') {
                    setData(data.sort((a, b) => a.average_cost - b.average_cost))

                }
                else if (text === 'high') {
                    setData(data.sort((a, b) => b.average_cost - a.average_cost))
                }



            })







    }, [text, datas])



    setTimeout(() => {
        setLoader(false)
        setDataInUi(true)
    }, 4000)

    const handleClick = text => {
        console.log(text)
        setText(text)
    }

    return (
        <div className="" >
            <h1 className="text-5xl font-extrabold text-center">All tourists

                <span className="text-red-400">
                    {texts}
                    <Cursor cursorColor='red' />
                </span>


            </h1>
            <p className="text-center py-3">Are you hunting for the best tourist places in Southeast Asia <br />
                that are sure to leave you stunned with their ethereal beauty?</p>


            <div className={`flex justify-center items-center ${loader ? 'block' : 'hidden'} `}>
                <span className="loading loading-bars loading-lg"></span>
            </div>
            {/* drop down */}
            <div className="flex justify-center md:justify-end">
                <details className="dropdown  w-56">
                    <summary className="m-1 btn bg-[#e8604c] ">Sort by average_cost</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handleClick('lower')} >Lower cost</a></li>
                        <li><a onClick={() => handleClick('high')}>Higher cost</a></li>
                    </ul>
                </details>


            </div>

            <div className={`max-w-7xl pt-10 mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${dataInUI ? 'block' : 'hidden'}`}>
                {
                    datas.map(spot => <Card key={spot._id} spot={spot}></Card>)
                }
            </div>


        </div>
    );
};

export default AllSpots;
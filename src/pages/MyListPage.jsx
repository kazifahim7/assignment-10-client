import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import TableInfo from "./TableInfo";

const MyListPage = () => {
    const { user } = useContext(AuthContext)
    console.log(user.email)



    const [ownList, setOwnList] = useState([])
    useEffect(() => {
        fetch('https://server-site-mu-seven.vercel.app/spots')
            .then(res => res.json())
            .then(data => {

                const remain = data.filter(item => item.email == user?.email)



                setOwnList(remain)
            })



    }, [user?.email])









    return (
        <div className="md:container md:mx-auto md:p-10">

            <h1 className="text-5xl font-bold text-center">Creator section</h1>
            <p className="text-center py-4">In this section we provide your own data .you can change it or delete it.

            </p>



            {
                ownList ? '' : <div className="flex justify-center items-center">
                    <img src='https://i.ibb.co/f2mvxTP/360-F-475012363-a-Nq-Xx8-Crso-Tf-JP5-KCf1r-ERd6-G50-K0h-Xw.jpg' alt="" />
                </div>
            }








            <div className="overflow-x-auto rounded-lg border-2 border-[#e97664]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>tourists_spot_name</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            ownList.map(item => <TableInfo setOwnList={setOwnList} ownList={ownList} key={item._id} item={item}></TableInfo>)
                        }






                    </tbody>
                </table>
            </div>







        </div>
    );
};

export default MyListPage;
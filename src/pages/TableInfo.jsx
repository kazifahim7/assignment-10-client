
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const TableInfo = ({ item, ownList, setOwnList }) => {

    const deleteData = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            fetch(`https://server-site-mu-seven.vercel.app/spots/${item?._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remain = ownList.filter(items => items._id !== id)
                        setOwnList(remain);




                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    }












                })





        });






    }




    return (
        <tr>
            <th>{item.name}</th>
            <td>{item.email}</td>
            <td>{item.tourists_spot_name}</td>
            <td>{item.location}</td>
            <td className="flex md:flex-col lg:flex-row items-center justify-center space-x-2 space-y-2 lg:space-y-0">
                <button onClick={() => deleteData(item?._id)} className="btn w-[80px] ">delete</button>
                <Link to={`/update/${item?._id}`}><button className="btn">update</button></Link>
            </td>
        </tr>
    );
};

export default TableInfo;
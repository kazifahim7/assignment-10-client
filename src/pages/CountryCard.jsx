import { Link } from "react-router-dom";


const CountryCard = ({ item }) => {
    return (
        <Link to={`/country/${item.id}`}  className="card w-full h-full bg-base-100 shadow-xl">
            <figure><img src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.country_name}</h2>
                <p>{item.description}</p>
            </div>
        </Link>
    );
};

export default CountryCard;
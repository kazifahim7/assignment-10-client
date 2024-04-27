import Banner from "./Banner";
import Client from "./Client";
import Countries from "./Countries";
import TouristsSpotsSection from "./TouristsSpotsSection";


const HOme = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristsSpotsSection></TouristsSpotsSection>
            <Countries></Countries>
            <Client></Client>
        </div>
    );
};

export default HOme;
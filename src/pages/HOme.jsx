import Banner from "./Banner";
import Client from "./Client";
import Countries from "./Countries";
import MoreSpots from "./MoreSpots";
import TouristsSpotsSection from "./TouristsSpotsSection";


const HOme = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristsSpotsSection></TouristsSpotsSection>
            <Countries></Countries>
            <Client></Client>
            <MoreSpots></MoreSpots>
        </div>
    );
};

export default HOme;
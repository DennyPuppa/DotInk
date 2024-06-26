import LocationSearch from "../../components/location/Location";
import TattooStyle from "../../components/tattoostyle/TattooStyle";
import AllPosts from "../../components/allPost/AllPosts";
import AllEvent from "../../components/allEvents/AllEvent";
import './maincomponent.css'


const MainComponent = () => {

    return (
        <div className="color invisible-scrollbar">
            <LocationSearch />
            <TattooStyle />
            <AllEvent />
            <AllPosts />
        </div>
    )
}

export default MainComponent;
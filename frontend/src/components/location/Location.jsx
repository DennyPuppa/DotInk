import { Container } from "react-bootstrap";
import './location.css'

const LocationSearch = () => {


    return (
        <Container className="py-5">
            <h2 className="text-white">Find your Own Tattoo Artist.</h2>
            <div className="d-flex gap-3">
                <div className="location-search-first">
                    <i class="fa-solid fa-location-dot"></i>
                    <input type="search" className="reset" name="city" />
                </div>

                <button className="location-search-btn"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </Container>
    );
}

export default LocationSearch;
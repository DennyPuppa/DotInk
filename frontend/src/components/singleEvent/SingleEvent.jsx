import "./singleEvent.css"
import { useNavigate } from "react-router-dom";
import GeneralBtn from "../generalBtn/GeneralBtn";

const SingleEvent = ({ _id, title, image, date, avatar, city, artist }) => {

    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate("/artist/" + _id)
    }

    return (
        <div className="py-3">
        <div className="post-card">
            <div className="post-img-container">
                <img src={image} alt="post Image" />
                <div className="d-flex justify-content-between icon-container">
                    <div className="icon-circle">
                        <i class="fa-regular fa-heart post-icon"></i>
                    </div>
                    <div className="icon-circle">
                        <i class="fa-solid fa-calendar post-icon"></i>
                    </div>
                </div>
            </div>

            <div className="artist-info py-3 px-4">
                <div className="d-flex justify-content-between align-items-center">
                    <p onClick={navigateToDetails}><span>@{artist}</span>, {city}</p>
                    <GeneralBtn btnText={`#${city}`} />
                </div>
                <p>{date}</p>
            </div>
        </div>
    </div>
    )
}

export default SingleEvent;
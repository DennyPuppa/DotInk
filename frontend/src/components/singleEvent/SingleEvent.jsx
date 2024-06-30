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
            <div className="event-card">
                <img className="event-img" src={image} alt="Event" />

                <div className="event-info p-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <div className="profile-picture-event">
                                <img className="rounded-circle" src={avatar} alt="Profile picture" />
                            </div>
                            <p className="fw-bold text-white" onClick={navigateToDetails}>@{artist}</p>
                        </div>
                        <GeneralBtn btnText={`#${city}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleEvent;
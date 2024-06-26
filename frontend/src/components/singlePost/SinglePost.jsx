import GeneralBtn from "../generalBtn/GeneralBtn";
import "./singlePost.css"
import { useNavigate } from "react-router-dom";

const SinglePost = ({ artist, city, title, description, image, postLike, _id, avatar, style }) => {

    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate("/author/" + _id)
    }

    return (
        <div className="post-card">
            <div className="post-img-container">
                <img src={image} alt="post Image" />
                <div className="d-flex justify-content-between icon-container">
                    <div className="icon-circle">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div className="icon-circle">
                        <i class="fa-solid fa-calendar"></i>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center gap-2 post-artist-section">
                <div className="artist-picture">
                    <img className="rounded-circle" src={avatar} alt="" />
                </div>
                <div className="d-flex flex-column">
                    <p onClick={navigateToDetails}>{artist}</p>
                    <p>{city}</p>
                </div>
            </div>

            <div>
                <p>{title}</p>
                <p>{description}</p>
                <p>#{style}</p>
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-2">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <GeneralBtn btnText={"Take an Appointment"} />
            </div>
        </div>
    )
}

export default SinglePost;
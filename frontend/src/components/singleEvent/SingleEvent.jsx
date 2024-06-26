import "./singleEvent.css"
import { useNavigate } from "react-router-dom";

const SingleEvent = ({ _id, title, image, author, date, avatar }) => {

    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate("/author/" + _id)
    }

    return (
            <div>
                
            </div>
    )
}

export default SingleEvent;
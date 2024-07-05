import GeneralBtn from '../generalBtn/GeneralBtn';
import './singleArtist.css'
import { useNavigate } from "react-router-dom";

const SingleArtist = ({ _id, avatar, username }) => {

    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate("/artist/" + _id)
    }

    return (
        <div className="py-2">
            <button className='btn-artist-sidelinks'>
                <div onClick={navigateToDetails} className='artist-container d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center gap-2'>
                        <div className='profile-picture-event'>
                            <img src={avatar} alt="" />
                        </div>
                        <p className='fw-bold'>@{username}</p>
                    </div>
                    <GeneralBtn btnText={<i class="fa-solid fa-paper-plane"></i>} />
                </div>
            </button>
        </div>
    )
}

export default SingleArtist;
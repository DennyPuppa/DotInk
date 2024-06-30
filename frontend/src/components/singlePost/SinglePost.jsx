import "./singlePost.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GeneralBtn from "../generalBtn/GeneralBtn";
import { motion } from "framer-motion"

const SinglePost = ({ artist, city, title, description, image, postLike, _id, avatar, style }) => {

    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate("/artist/" + _id)
    }

    const [isLike, setIsLike] = useState(false)

    const toggleLike = () => {
        setIsLike(!isLike)
        console.log(isLike);
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <div className="py-3">
                <div className="post-card">
                    <div className="post-img-container">
                        <img src={image} alt="Post" />
                        <div className="d-flex justify-content-between icon-container">
                            <button onClick={toggleLike} className="icon-circle">
                                <i className={isLike ? 'fa-solid fa-heart like-post' : 'fa-solid fa-heart post-icon post-icon-like'}></i>
                            </button>
                            <button className="icon-circle">
                                <i class="fa-solid fa-calendar post-icon"></i>
                            </button>
                        </div>
                    </div>

                    <div className="artist-info py-3 px-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <p onClick={navigateToDetails}><span>@{artist}</span>, {city}</p>
                            <GeneralBtn btnText={`#${style}`} />
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SinglePost;
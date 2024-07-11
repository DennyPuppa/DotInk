import "./singlePost.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GeneralBtn from "../generalBtn/GeneralBtn";
import { motion } from "framer-motion"
import useSession from "../../hooks/useSession";

const SinglePost = ({ artist, city, title, description, image, postLike, _id, avatar, style, getAllPosts }) => {

    const { session, decodedSession } = useSession()

    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate("/artist/" + _id)
    }

    const [isLike, setIsLike] = useState()

    const handleLike = async () => {
        if (!isLike) {
            try {
                const response = await fetch(process.env.REACT_APP_BASEURL + `/like/${_id}/${decodedSession._id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json()
                setIsLike(true)
                getAllPosts()

                return data
            } catch (error) {
                console.log(error.message)
            }
        }
    }

    useEffect(() => {
        if (postLike) {
            if (postLike.includes(decodedSession._id)) {
                setIsLike(true)
            } else {
                setIsLike(false);
            }
        }
    }, [postLike])

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
                            <button onClick={handleLike} className="icon-circle">
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
                            <div className="d-flex align-items-center gap-2">
                                <div className="d-flex align-items-center gap-1">
                                <i class="fs-6 fa-regular fa-heart"></i>
                                <p>{postLike.length}</p>
                                </div>    
                                <GeneralBtn btnText={`#${style}`} />
                            </div>
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SinglePost;
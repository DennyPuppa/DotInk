import useSession from "../../hooks/useSession";
import './rightsidebar.css'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleArtist from "./SingleArtist";
import dotinkImg from "../../assets/img/event-dotink.jpg"


const RightSidebar = () => {

    const { session, decodedSession } = useSession()
    // console.log(decodedSession);

    const [allArtist, setAllArtist] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const getAllArtist = async () => {
        setIsLoading(true)
        try {
            if (input === "") {
                const response = await fetch(process.env.REACT_APP_BASEURL + '/artists')
                const data = await response.json()
                setIsLoading(false)
                setAllArtist(data)
                console.log(data);
                return data
            } else {
                const filterByUsername = allArtist.filter(artist => artist.username.toLowerCase().includes(input.toLowerCase()))
                setAllArtist(filterByUsername)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getAllArtist()
    }, [input])

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className="container-fluid p-0 mb-4">
                <div className="row">
                    <div className="col">
                    <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="btn-motion"
  >
                        <Link to='/event/create'>
                            <div className="square-event-container">
                                <img src={dotinkImg} alt="" />
                                <div className="overlay"></div>
                                <p className="overlay-text">#NewEvent📅</p>
                            </div>
                        </Link>
                        </motion.button>
                    </div>
                </div>
            </div>
            <div className="container-fluid right-sidebar-artist">
                <div className="row">
                    <div className="col-12 py-3">
                        <form class="search-box d-flex py-2">
                            <input onChange={handleInput} className="find-artist" type="text" aria-label="Search" />
                            <i  className="fa-solid fa-magnifying-glass"></i>
                        </form>
                        <div className="row side-nav-artist invisible-scrollbar">
                            {allArtist.map((artist, index) => (
                                <div key={`singleArtist-${index}`} className="col-12">
                                    <SingleArtist
                                        avatar={artist.avatar}
                                        username={artist.username}
                                        _id={artist._id}
                                    />
                                </div>
                            ))}
                        </div>
                        
                        {/* <hr />
                        <div>
                            <p>#Appointments</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default RightSidebar;
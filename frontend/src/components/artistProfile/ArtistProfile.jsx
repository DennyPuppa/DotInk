import useSession from "../../hooks/useSession";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import './artistProfile.css'
import { motion } from "framer-motion";
import ArtistPost from "./ArtistPost";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ArtistEvent from "./ArtistEvent";
import GeneralBtn from "../generalBtn/GeneralBtn";


const ArtistProfile = () => {
    const { session, decodedSession } = useSession()
    // console.log(decodedSession);

    const id = useParams();

    const [artistInfo, setArtistInfo] = useState([])
    const [artistPost, setArtistPost] = useState([])
    const [artistEvent, setArtistEvent] = useState([])
    const [artistFollower, setArtistFollower] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const getArtistInfo = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(process.env.REACT_APP_BASEURL + `/artist/${id.id}`)
            const data = await response.json()
            setIsLoading(false)
            setArtistInfo(data)
            setArtistPost(data.post)
            setArtistEvent(data.event)
            setArtistFollower(data.followers.length)
            return data
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getArtistInfo()
    }, [])

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
            <div className="scroll-nav invisible-scrollbar">
                <div className="container">
                    <div className="row artist-bio py-3">
                        <div className="col-5">
                            <div className="profile-avatar">
                                <img src={artistInfo.avatar} alt="" />
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex gap-1">
                                    <p className="fw-bold ">{artistInfo.firstname}</p>
                                    <p className="fw-bold ">{artistInfo.lastname}</p>
                                </div>
                                <GeneralBtn btnText={`#${artistInfo.city}`} />
                            </div>
                                <p>@{artistInfo.username}</p>
                            <div className="d-flex align-items-center justify-content-evenly pt-3">
                                <div className="d-flex gap-3">
                                    <div className="d-flex flex-column align-items-center">
                                        <p className="fw-bold fs-5">{artistPost.length}</p>
                                        <p>post</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <p className="fw-bold fs-5">{artistEvent.length}</p>
                                        <p>event</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <p className="fw-bold fs-5">{artistFollower}</p>
                                        <p>follower</p>
                                    </div>
                                </div>
                            </div>



                            {/* {artistInfo.tattoostyle.map(style => (
                            <GeneralBtn btnText={`#${style}`}/>
                        ))} */}
                        </div>
                        <div className="d-flex justify-content-between pt-3 gap-2">
                            <button className="btn btn-dark w-100">Follow</button>
                            <button className="btn btn-dark w-100">Appointment</button>
                        </div>
                    </div>
                    <Tabs
                        defaultActiveKey="posts"
                        id="uncontrolled-tab-example"
                        className="my-3"
                    >
                        <Tab eventKey="posts" title="Post">
                            <div className="container-fluid">
                                <div className="row">
                                    {artistPost.map((post, index) => (

                                        <div key={`singlepost-${index}`} className='col-4'>
                                            <ArtistPost
                                                image={post.image}
                                                _id={post._id}
                                                tattoostyle={post.tattoostyle}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="events" title="Event">
                            <div className="container-fluid">
                                <div className="row">
                                    {artistEvent.map((event, index) => (

                                        <div key={`singlepost-${index}`} className='col-4'>
                                            <ArtistEvent
                                                image={event.image}
                                                _id={event._id}
                                                city={event.city}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </motion.div>
    )
}

export default ArtistProfile;
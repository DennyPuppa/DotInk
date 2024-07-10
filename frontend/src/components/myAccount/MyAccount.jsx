import useSession from "../../hooks/useSession";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import GeneralBtn from '../generalBtn/GeneralBtn';
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import ArtistPost from "../artistProfile/ArtistPost";
import ArtistEvent from "../artistProfile/ArtistEvent";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const MyAccount = () => {
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
            const response = await fetch(process.env.REACT_APP_BASEURL + `/artist/${decodedSession._id}`)
            const data = await response.json()
            setIsLoading(false)
            setArtistInfo(data)
            setArtistPost(data.post)
            setArtistEvent(data.event)
            setArtistFollower(data.followers.length)
            console.log(data);
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
            <div className="invisible-scrollbar">
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
                                    <p className="fw-bold">{artistInfo.firstname}</p>
                                    <p className="fw-bold">{artistInfo.lastname}</p>
                                </div>
                                <GeneralBtn btnText={`#${artistInfo.city}`} />
                            </div>
                            <div className="d-flex gap-1 align-items-center">
                                <p>@{artistInfo.username}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-evenly pt-3">
                                <div className="d-flex gap-3">
                                    <div className="d-flex flex-column align-items-center">
                                        <p className="fw-bold">{artistPost.length}</p>
                                        <p>post</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <p className="fw-bold">{artistEvent.length}</p>
                                        <p>event</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <p className="fw-bold">{artistFollower}</p>
                                        <p>follower</p>
                                    </div>
                                </div>

                            </div>



                            {/* {artistInfo.tattoostyle.map(style => (
                            <GeneralBtn btnText={`#${style}`}/>
                        ))} */}
                        </div>
                        <div className="d-flex justify-content-between pt-3 gap-2">
                            <Link className="w-100" to='/post/create'><button className="btn-action-artist w-100">New Post</button></Link>
                            <Link className="w-100" to='/event/create'><button className="btn-action-artist w-100">New Event</button></Link>
                        </div>
                    </div>
                    <Tabs
                        defaultActiveKey="posts"
                        id="uncontrolled-tab-example"
                        className="my-3"
                        justify
                    >
                        <Tab eventKey="posts" title={<i class="fa-solid fa-table-cells"></i>}>
                            <div className="container-fluid scroll-tabs invisible-scrollbar">
                                <div className="row">
                                    {artistPost.map((post, index) => (

                                        <div key={`singlepost-${index}`} className='col-4'>
                                            <ArtistPost
                                                image={post.image}
                                                _id={post._id}
                                                tattoostyle={post.tattoostyle}
                                            />
                                        </div>
                                    )).reverse()}
                                    {artistPost.length === 0 && (
                                        <div className="d-flex flex-column justify-content-center align-items-center py-2">
                                            <p className="fs-3 fw-semibold">Share it with the world</p>
                                            <p>Create your first #Post</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="events" title={<i class="fa-solid fa-calendar"></i>}>
                            <div className="container-fluid scroll-tabs invisible-scrollbar">
                                <div className="row">
                                    {artistEvent.map((event, index) => (

                                        <div key={`singlepost-${index}`} className='col-4'>
                                            <ArtistEvent
                                                image={event.image}
                                                _id={event._id}
                                                city={event.city}
                                            />
                                        </div>
                                    )).reverse()}
                                    {artistEvent.length === 0 && (
                                        <div className="d-flex flex-column justify-content-center align-items-center py-2">
                                            <p className="fs-3 fw-semibold">Share it with the world</p>
                                            <p>Create your first #Event</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </motion.div>
    )
}

export default MyAccount;
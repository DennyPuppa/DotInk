import useSession from "../../hooks/useSession";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import './artistProfile.css'
import { motion } from "framer-motion";
import ArtistPost from "./ArtistPost";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ArtistEvent from "./ArtistEvent";


const ArtistProfile = () => {
    const { session, decodedSession } = useSession()
    // console.log(decodedSession);

    const id = useParams();

    const [artistInfo, setArtistInfo] = useState({})
    const [artistPost, setArtistPost] = useState([])
    const [artistEvent, setArtistEvent] = useState([])
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
            <div className="container">
                <div className="row">
                    <div className='col'>
                        <div className="artist-bio">
                            <div className="profile-picture">
                                <img className="rounded-circle" src={artistInfo.avatar} alt="" />
                            </div>
                            <p>{artistInfo.firstname}</p>
                            <p>{artistInfo.lastname}</p>
                            <p>{artistInfo.username}</p>
                            <p>{artistInfo.city}</p>
                            {/* {artistInfo.tattoostyle.map(style => {
                            <GeneralBtn btnText={`#${style}`}/>
                        })} */}
                        </div>
                    </div>
                </div>
                <Tabs
                    defaultActiveKey="posts"
                    id="uncontrolled-tab-example"
                    className="mb-3"
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
        </motion.div>
    )
}

export default ArtistProfile;
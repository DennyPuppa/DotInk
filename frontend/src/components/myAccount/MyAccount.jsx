import useSession from "../../hooks/useSession";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import GeneralBtn from '../generalBtn/GeneralBtn';
import { Link } from "react-router-dom";


const MyAccount = () => {
    const { session, decodedSession } = useSession()
    // console.log(decodedSession);

    const id = useParams();

    const [artistInfo, setArtistInfo] = useState([])
    const [artistPost, setArtistPost] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getArtistInfo = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(process.env.REACT_APP_BASEURL + `/artist/${decodedSession._id}`)
            const data = await response.json()
            setIsLoading(false)
            setArtistInfo(data)
            setArtistPost(data.post)
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
                        <div className="d-flex">
                            <Link to="/event/create"><GeneralBtn btnText={"Publish an event"}/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {artistPost.map(post => {
                    console.log(post);
                    <p>{post.title}</p>
                })}
            </div>
        </div>
    )
}

export default MyAccount;
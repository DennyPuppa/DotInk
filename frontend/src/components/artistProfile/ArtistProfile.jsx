import useSession from "../../hooks/useSession";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';


const ArtistProfile = () => {
    const { session, decodedSession } = useSession()
    // console.log(decodedSession);

    const id = useParams();

    const [artistInfo, setArtistInfo] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getArtistInfo = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(process.env.REACT_APP_BASEURL + `/artist/${id.id}`)
            const data = await response.json()
            setIsLoading(false)
            setArtistInfo(data)
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
                <div className='col py-5'>
                    {/* <img src={artistInfo.avatar} alt="" /> */}
                    <p>{artistInfo.firstname}</p>
                    <p>{artistInfo.lastname}</p>
                    <p>{artistInfo.username}</p>
                    <p>{artistInfo.email}</p>
                    <p>{artistInfo.tattoostyle}</p>
                </div>
            </div>
        </div>
    )
}

export default ArtistProfile;
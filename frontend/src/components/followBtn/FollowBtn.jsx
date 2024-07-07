import useSession from "../../hooks/useSession";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";


const FollowBtn = ({allFollowers}) => {
    const { session, decodedSession } = useSession()
    // console.log(decodedSession);

    const id = useParams();

    const [isFollow, setIsFollow] = useState()
    const [btnText, setBtnText] = useState('')

    const btnVisual = () => {
        console.log(allFollowers);
        const myFollow = allFollowers.filter(follower => follower._id.includes(decodedSession._id))
        console.log(myFollow);
        if(myFollow.length === 0){
            setIsFollow(false)
            setBtnText('Follow')
            console.log(isFollow, 'CIAOOOoO');
        } else {
            setIsFollow(true);
            setBtnText('Unfollow')
            console.log(isFollow);
        }
    }

    const handleFollow = async () => {
        if(!isFollow){
            try {
                const response = await fetch(process.env.REACT_APP_BASEURL + `/artist/${decodedSession._id}/follow/${id.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json()
                console.log(data);

                return data
            } catch (error) {
                console.log(error.message)
            }
        }
    }

    useEffect(() => {
        btnVisual()
    }, [])

    return (
        <button onClick={handleFollow} className={!isFollow ? "btn btn-dark w-100" : "btn btn-danger w-100"}>{btnText}</button>
    )
}

export default FollowBtn;
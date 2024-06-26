import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Col, Row } from 'react-bootstrap';
import SinglePost from '../singlePost/SinglePost';


const AllPosts = (props) => {

    const [allPosts, setAllPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getAllPosts = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(process.env.REACT_APP_BASEURL + '/post')
            const data = await response.json()
            setIsLoading(false)
            setAllPosts(data)
            console.log(data);
            return data
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                {allPosts.map((post, index) => (
                    <div className='col py-5' key={`singlepost-${index}`}>
                        <SinglePost
                            artist={post.artistId.username}
                            city={post.artistId.city}
                            title={post.title}
                            description={post.description}
                            image={post.image}
                            postLike={post.postLike.length}
                            _id={post.artistId._id}
                            avatar={post.artistId.avatar}
                            style={post.tattoostyle}
                        />
                    </div>
                ))}
            </div>  
        </div>
    )
}

export default AllPosts;
import { useState, useEffect } from 'react';
import SinglePost from '../singlePost/SinglePost';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"


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
                <div className='d-flex align-items-center justify-content-between px-3'>
                    <h2 className='event-title'>#Feed✌</h2>
                    <Link to='/post/create'>
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="icon-circle"
                        >
                            <i class="fa-solid fa-plus"></i>
                        </motion.button>
                    </Link>
                </div>
                <div className='col-12'>
                    {allPosts.map((post, index) => (
                        <SinglePost
                            key={`singlepost-${index}`}
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

                    )).reverse()}
                </div>
            </div>
        </div>
    )
}

export default AllPosts;
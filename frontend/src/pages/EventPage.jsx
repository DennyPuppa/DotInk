import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useSession from "../hooks/useSession";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import './css/form.css'
import formImage from '../assets/img/dotink-post.jpg'
import { FileUploader } from "react-drag-drop-files";
import './css/customDragDrop.css'

const PublicEventPage = () => {

    const { session, decodedSession } = useSession()

    const [formData, setFormData] = useState({})
    const [eventFile, setEventFile] = useState(null)
    const navigate = useNavigate();

    // const onChangeFile = (e) => {
    //     setEventFile(e.target.files[0])
    // }

    const handleChange = (file) => {
        setEventFile(file);
    };

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData()

        data.append('eventImg', eventFile)
        Object
            .entries(formData)
            .forEach(([key, value]) => {
                data.append(key, value)
            })

        try {
            const response = await axios.post(process.env.REACT_APP_BASEURL + `/artist/${decodedSession._id}/event/create`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (response.status === 201) {
                navigate('/')
            }
            return response.data
        } catch (e) {
            console.log(e.message)
        }
    }

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
            <div className="container py-2">
                <div className="row d-flex d-md-none">
                    <div className="col">
                        <Link to="/"><i className="fa-solid fa-arrow-left fs-2 text-black"></i></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center pt-5">
                        <div className="form-box d-flex">
                            <div className="d-none d-md-block">
                                <div className="form-img-container">
                                    <img src={formImage} alt="" />
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center p-5">
                                <h2 className="form-title">Create New #Event</h2>
                                <div className='d-flex align-items-center gap-1 pb-3'>
                                    <i class="fa-solid fa-droplet nav-icon"></i>
                                    <p className='logo'>DotINK</p>
                                </div>
                                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <FileUploader handleChange={handleChange} name="eventImg" type="file" />
                                        {/* <label htmlFor="inputPostImg">File input</label>
                                    <input
                                        onChange={onChangeFile}
                                        type="file"
                                        name="postImg"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                    /> */}
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            onChange={onChangeInput}
                                            name="title"
                                            type="text"
                                            className="form-input"
                                            aria-describedby="title"
                                            placeholder="Enter title"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            onChange={onChangeInput}
                                            name="city"
                                            type="text"
                                            className="form-input"
                                            aria-describedby="city"
                                            placeholder="Enter city"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            onChange={onChangeInput}
                                            name="date"
                                            type="text"
                                            className="form-input"
                                            aria-describedby="date"
                                            placeholder="Enter date"
                                        />
                                    </div>
                                    {/* <div className="form-group mb-3">
                                <label htmlFor="inputEventImg">File input</label>
                                <input
                                    onChange={onChangeFile}
                                    type="file"
                                    name="eventImg"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                />
                            </div> */}
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="btn-form w-100 my-2"
                                        type="submit"
                                    >Public Event
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default PublicEventPage;
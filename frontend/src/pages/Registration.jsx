import { useState } from "react";
import axios from "axios";
import formImage from '../assets/img/event-dotink.jpg'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './css/form.css'
import { motion } from "framer-motion"

const RegistrationPage = () => {

    const [formData, setFormData] = useState({})
    const [avatarFile, setAvatarFile] = useState(null)
    const navigate = useNavigate();

    const onChangeFile = (e) => {
        setAvatarFile(e.target.files[0])
    }

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

        data.append('avatarImg', avatarFile)
        Object
            .entries(formData)
            .forEach(([key, value]) => {
                data.append(key, value)
            })

        try {
            const response = await axios.post(process.env.REACT_APP_BASEURL + '/artist/create', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (response.status === 201) {
                navigate('/login')
            }
            return response.data
        } catch (e) {
            console.log(e);
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
                    <Link to="/start"><i className="fa-solid fa-arrow-left fs-2 text-black"></i></Link>
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
                        <h2 className="form-title">New Account</h2>
                        <div className='d-flex align-items-center gap-1 pb-3'>
                            <i class="fa-solid fa-droplet nav-icon"></i>
                            <p className='logo'>DotINK</p>
                        </div>
                        <form encType="multipart/form-data" onSubmit={handleSubmit}>
                            <div className="d-flex gap-3">
                                <div className="form-group mb-3">
                                    <input
                                        onChange={onChangeInput}
                                        name="firstname"
                                        type="text"
                                        className="form-input"
                                        aria-describedby="firstname"
                                        placeholder="Enter firstname"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        onChange={onChangeInput}
                                        name="lastname"
                                        type="text"
                                        className="form-input"
                                        aria-describedby="first lastname"
                                        placeholder="Enter lastname"
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    onChange={onChangeInput}
                                    name="username"
                                    type="text"
                                    className="form-input"
                                    aria-describedby="username"
                                    placeholder="Enter username"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    onChange={onChangeInput}
                                    name="email"
                                    type="email"
                                    className="form-input"
                                    aria-describedby="email"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    onChange={onChangeInput}
                                    name="password"
                                    type="password"
                                    className="form-input"
                                    aria-describedby="password"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="d-flex gap-3">
                                <div className="form-group mb-3">
                                    <input
                                        onChange={onChangeInput}
                                        name="city"
                                        type="text"
                                        className="form-input"
                                        aria-describedby="city"
                                        placeholder="Enter city where you work"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        onChange={onChangeInput}
                                        name="tattoostyle"
                                        type="text"
                                        className="form-input"
                                        aria-describedby="tattoostyle"
                                        placeholder="Enter your Tattoo Style"
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="inputAvatar">File input</label>
                                <input
                                    onChange={onChangeFile}
                                    type="file"
                                    name="avatarImg"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="btn-form w-100 my-2"
                                type="submit"
                            >Create Account
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

export default RegistrationPage;
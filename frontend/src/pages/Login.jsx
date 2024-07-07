import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './css/form.css'
import { motion } from "framer-motion"

const Login = () => {

    const [formData, setFormData] = useState({})
    const [isArtist, setIsArtist] = useState(true)
    const navigate = useNavigate();

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(process.env.REACT_APP_BASEURL + '/login/artist', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()

            if (response.ok) {
                localStorage.setItem('token', JSON.stringify(data));
                navigate('/');
            }
            return data;
        } catch (error) {
            console.log(error.message)
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

                        <div className="form-box d-flex flex-column justify-content-center align-items-center p-5">
                            <h2 className="form-title py-3">Login</h2>
                            <div className='d-flex align-items-center gap-1 pb-3'>
                                <i class="fa-solid fa-droplet nav-icon"></i>
                                <p className='logo'>DotINK</p>
                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="form-group pt-4 mb-4">
                                    <input
                                        onChange={onChangeInput}
                                        name="email"
                                        type="email"
                                        className="form-input"
                                        aria-describedby="email"
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div className="form-group pb-4 mb-3">
                                    <input
                                        onChange={onChangeInput}
                                        name="password"
                                        type="password"
                                        className="form-input"
                                        aria-describedby="password"
                                        placeholder="Enter password"
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="btn-form w-100 my-2"
                                    type="submit"
                                >Sign In
                                </motion.button>
                            </form>
                            <div className="d-flex align-items-center gap-1 pt-5">
                                <p>Don't have an account?</p>
                                <Link className='nav-link' to="/registrazione"><span className="after-form-action">Sign Up</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Login;
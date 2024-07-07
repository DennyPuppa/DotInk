import MyNav from "../components/navbar/MyNav";
import { Link } from "react-router-dom";
import dotink from "../assets/img/dotink.png"
import "./css/startPage.css"
import { motion } from "framer-motion"


const StartPage = () => {

    return (
        <>
            <div className="start-page-background py-3 pt-md-0">
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
                            <div className="order-1 order-md-0 col-12 col-md-6">
                                <div className="background-image-container">
                                    <img src={dotink} alt="DotInk background" />
                                </div>
                            </div>
                            <div className="order-0 order-md-1 col-12 col-md-6 d-md-flex flex-column justify-content-center gap-3">
                                <div className='d-flex align-items-baseline gap-1'>
                                    <i class="fa-solid fa-droplet logo-icon"></i>
                                    <h1 className='logo-start'>DotINK</h1>
                                </div>
                                <div className="info-container py-2">
                                    <h2>Discover your favourite Tattoo Artist,
                                        post your creation. Choose your Style!✌
                                    </h2>
                                    <div className="d-md-flex flex-column gap-3 pt-5 d-none">
                                        <Link to="/login"><motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="login-button"
                                            type="submit"
                                        >Login</motion.button></Link>
                                        <Link to="/registrazione"><motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="registration-button"
                                            type="submit"
                                        >Create account</motion.button></Link>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="d-md-none pb-3 order-2 d-flex flex-column gap-2">
                                <div className="d-md-none">
                                    <Link to="/login"><button className="login-button">Login</button></Link>
                                </div>
                                <div className="d-md-none">
                                    <Link to="/registrazione"><button className="registration-button">Create account</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </>
    )
}

export default StartPage;
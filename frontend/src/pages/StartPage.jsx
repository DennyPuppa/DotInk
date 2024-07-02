import MyNav from "../components/navbar/MyNav";
import { Link } from "react-router-dom";
import dotink from "../assets/img/dotink.png"
import "./css/startPage.css"
import { motion } from "framer-motion"


const StartPage = () => {

    return (
        <>
            <div className="start-page-background py-3 pt-md-0">
                <div className="container">
                    <div className="row">
                        <div className="order-1 order-md-0 col-12 col-md-6">
                            <div className="background-image-container">
                                <img src={dotink} alt="DotInk background" />
                            </div>
                        </div>
                        <div className="order-0 order-md-1 col-12 col-md-6 d-md-flex flex-column justify-content-center">
                            <div className='d-flex align-items-baseline gap-1'>
                                <i class="fa-solid fa-droplet logo-icon"></i>
                                <h1 className='logo-start'>DotINK</h1>
                            </div>
                            <div className="info-container py-2">
                                <h2>Discover your favourite Tattoo Artist,
                                    post your creation. Choose your Style!✌
                                </h2>
                                <div className="d-md-flex flex-column gap-3 pt-5 d-none">
                                    <Link to="/login"><button className="login-button">Login</button></Link>
                                    <Link to="/registrazione"><button className="registration-button">Create account</button></Link>
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
            </div>
        </>
    )
}

export default StartPage;
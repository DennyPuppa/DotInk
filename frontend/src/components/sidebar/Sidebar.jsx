import { useState } from "react";
import useSession from "../../hooks/useSession";
import NavbarInk from "../navbar/MyNav";
import './sidebar.css'
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import SidebarLinks from "./SidebarLinks";
import GeneralBtn from "../generalBtn/GeneralBtn";


const Sidebar = () => {

    const { session, decodedSession } = useSession()

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
            <div className="container-fluid side-nav invisible-scrollbar">
                <div className="row">
                    <div className="col-12">
                        <NavbarInk />
                        {decodedSession && (
                            <div className="d-flex flex-column gap-2 justify-content-center align-items-center py-3">
                                <div className="profile-picture">
                                    <img className="rounded-circle" src={decodedSession.avatar} alt="Profile picture" />
                                </div>
                                <div>
                                    <div className="d-flex gap-2">
                                        <p className="profile-info">{decodedSession.firstname}</p>
                                        <p className="profile-info">{decodedSession.lastname}</p>
                                    </div>
                                    <p className="text-center">{decodedSession.username}</p>
                                </div>
                                <Link to='/account'><GeneralBtn btnText={'MyProfile'} /></Link>
                            </div>
                        )}
                        <hr />
                        <SidebarLinks />
                        <hr />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar;
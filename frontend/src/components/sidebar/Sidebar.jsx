import { useState } from "react";
import useSession from "../../hooks/useSession";
import NavbarInk from "../navbar/MyNav";
import './sidebar.css'
import { Link } from "react-router-dom";


const Sidebar = () => {

    const { session, decodedSession } = useSession()

    return (
        <div className="container-fluid side-nav invisible-scrollbar">
            <div className="row">
                <div className="col-12">
                    <NavbarInk/>
                    {decodedSession && (
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="profile-picture rounded-circle">
                                <img className="rounded-circle" src={decodedSession.avatar} alt="Profile picture" />
                            </div>
                            <p>{decodedSession.username}</p>
                            <p>{decodedSession.city}</p>
                        </div>
                    )}
                    <hr />
                    <div className="side-link d-flex flex-column">
                        <div className="d-flex align-items-center gap-3">
                            <i class="fa-solid fa-arrow-trend-up"></i>
                            <p className="m-0">Feed</p>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <i class="fa-solid fa-arrow-trend-up"></i>
                            <p className="m-0">Messages</p>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <i class="fa-solid fa-arrow-trend-up"></i>
                            <p className="m-0">Notifications</p>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <i class="fa-solid fa-arrow-trend-up"></i>
                            <p className="m-0">Settings</p>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <i class="fa-solid fa-arrow-trend-up"></i>
                            <p className="m-0">Calendar</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
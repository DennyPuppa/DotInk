import { useState } from "react";
import useSession from "../../hooks/useSession";
import NavbarInk from "../navbar/MyNavDesktop";
import './sidebar.css'


const Sidebar = () => {

    const { session, decodedSession } = useSession()
    console.log(decodedSession);

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
                            <p className="m-0 text-white">{decodedSession.username}</p>
                            <p className="m-0 text-white">{decodedSession.city}</p>
                            <div className="d-flex gap-3">
                                <div className="d-flex flex-column align-items-center">
                                    <p className="m-0 text-white">{decodedSession.post.length}</p>
                                    <p className="m-0 text-white">Post</p>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <p className="m-0 text-white">{decodedSession.follows.length}</p>
                                    <p className="m-0 text-white">Followers</p>
                                </div>
                            </div>
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
import MyNav from "../components/navbar/MyNav";
import useSession from "../hooks/useSession";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import FooterMobile from "../components/footerMobile/FooterMobile";
import ArtistProfile from "../components/artistProfile/ArtistProfile";
import Sidebar from "../components/sidebar/Sidebar";
import RightSidebar from "../components/rightSidebar/RightSidebar";


const Profile = () => {

    return (
        <>
            <div className="d-block d-md-none">
                <MyNav />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 pt-md-5 d-none d-md-block">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-6 pt-md-5">
                        <ArtistProfile />
                    </div>
                    <div className="col-12 col-md-3 pt-md-5 d-none d-md-block">
                        <RightSidebar />
                    </div>
                </div>
            </div>
            <div className="col-12 d-md-none">
                <FooterMobile />
            </div>
        </>
    )
}

export default Profile;
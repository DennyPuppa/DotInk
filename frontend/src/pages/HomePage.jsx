import MyNav from "../components/navbar/MyNav";
import useSession from "../hooks/useSession";
import MainComponent from "../components/mainComponent/MainComponent";
import Sidebar from "../components/sidebar/Sidebar";
import RightSidebar from "../components/rightSidebar/RightSidebar";
import FooterMobile from "../components/footerMobile/FooterMobile";


const HomePage = () => {
    const { session, decodedSession } = useSession()
    // console.log(decodedSession);

    return (
        <>
            <div className="d-block d-md-none">
                <MyNav />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 d-none d-md-block">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-6 pt-md-5">
                        <MainComponent />
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

export default HomePage;
import useSession from "../../hooks/useSession";
import './rightsidebar.css'


const RightSidebar = () => {

    const { session, decodedSession } = useSession()
    console.log(decodedSession);

    return (
        <div className="container-fluid side-nav invisible-scrollbar">
            <div className="row">
                <div className="col-12">
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

export default RightSidebar;
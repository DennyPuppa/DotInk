import useSession from "../../hooks/useSession";
import './rightsidebar.css'
import { motion } from "framer-motion"


const RightSidebar = () => {

    const { session, decodedSession } = useSession()
    // console.log(decodedSession);

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
        </motion.div>
    )
}

export default RightSidebar;
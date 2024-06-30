import LocationSearch from "../../components/location/Location";
import TattooStyle from "../../components/tattoostyle/TattooStyle";
import AllPosts from "../../components/allPost/AllPosts";
import AllEvent from "../../components/allEvents/AllEvent";
import './maincomponent.css'
import { motion } from "framer-motion"
import PublicPostFast from "../postPublicFast/PostPublicFast";


const MainComponent = () => {

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
            <div className="scroll-nav invisible-scrollbar">
                {/* <PublicPostFast /> */}
                <AllEvent />
                <LocationSearch />
                <TattooStyle />
                <AllPosts />
            </div>
        </motion.div>
    )
}

export default MainComponent;
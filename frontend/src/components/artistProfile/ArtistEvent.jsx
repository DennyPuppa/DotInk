import GeneralBtn from '../generalBtn/GeneralBtn';
import './artistProfile.css'

const ArtistEvent = ({image, _id, city}) => {

    return (
            <div className="profile-post-container">
                <img src={image} alt="" />
                <div className='style-absolute-post d-none d-lg-block'>
                    <GeneralBtn btnText={`#${city}`}/>
                </div>
            </div>
    )
}

export default ArtistEvent;
import GeneralBtn from '../generalBtn/GeneralBtn';
import './artistProfile.css'

const ArtistPost = ({image, _id, tattoostyle}) => {

    return (
            <div className="profile-post-container">
                <img src={image} alt="" />
                <div className='style-absolute-post d-none d-lg-block'>
                    <GeneralBtn btnText={`#${tattoostyle}`}/>
                </div>
            </div>
    )
}

export default ArtistPost;
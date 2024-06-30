import { useState } from "react";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import useSession from "../../hooks/useSession";
import './postPublicFast.css'
import GeneralBtn from "../generalBtn/GeneralBtn";
import { useNavigate } from 'react-router-dom';

const PublicPostFast = () => {

    const { session, decodedSession } = useSession()

    const [formData, setFormData] = useState({})
    const [postFile, setPostFile] = useState(null)
    const [succesPost, setSuccesPost] = useState(null)
    const navigate = useNavigate();

    const onChangeFile = (e) => {
        setPostFile(e.target.files[0])
    }

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData()

        data.append('postImg', postFile)
        Object
            .entries(formData)
            .forEach(([key, value]) => {
                data.append(key, value)
            })

        try {
            const response = await axios.post(process.env.REACT_APP_BASEURL + `/artist/${decodedSession._id}/post/create`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setSuccesPost(true)
            return response.data
        } catch (e) {
            setSuccesPost(false)
            console.log(e.message)
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col post-public-form-container p-3">
                    <div className="d-flex">
                        <div className="profile-picture">
                            <img className="rounded-circle" src={decodedSession.avatar} alt="" />
                        </div>
                        <form encType="multipart/form-data" onSubmit={handleSubmit}>
                            <div className="d-flex">
                                <div className="form-group mb-3">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        onChange={onChangeInput}
                                        name="title"
                                        type="text"
                                        className="form-control"
                                        aria-describedby="title"
                                        placeholder="Enter title"
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="tattoostyle">Tattoostyle</label>
                                    <input
                                        onChange={onChangeInput}
                                        name="tattoostyle"
                                        type="text"
                                        className="form-control"
                                        aria-describedby="tattoostyle"
                                        placeholder="Enter tattoostyle"
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="description">Description</label>
                                <input
                                    onChange={onChangeInput}
                                    name="description"
                                    type="text"
                                    className="form-control"
                                    aria-describedby="description"
                                    placeholder="Enter description"
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="inputPostImg">File input</label>
                                <input
                                    onChange={onChangeFile}
                                    type="file"
                                    name="postImg"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <GeneralBtn type="submit" btnText={'Post'}></GeneralBtn>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PublicPostFast;
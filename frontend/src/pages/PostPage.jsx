import { useState } from "react";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import useSession from "../hooks/useSession";

const PublicPostPage = () => {

    const { session, decodedSession } = useSession()

    const [formData, setFormData] = useState({})
    const [postFile, setPostFile] = useState(null)
    const [succesRegistration, setSuccesRegistration] = useState(null)
    console.log(formData)

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
            setSuccesRegistration(true)
            return response.data
        } catch (e) {
            setSuccesRegistration(false)
            console.log(e.message)
        }
    }

    return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <h2 className="mb-5">Public Post</h2>
                        <form encType="multipart/form-data" onSubmit={handleSubmit}>
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
                            <button type="submit" className="btn btn-primary">Public</button>
                            {succesRegistration &&
                                <Alert key="succes" variant="success" className="px-2 pt-1 pb-0 mt-2 text-center">
                                    <p>Registrazione effettuata!</p>
                                </Alert>
                            }
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default PublicPostPage;
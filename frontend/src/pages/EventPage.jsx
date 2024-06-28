import { useState } from "react";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import useSession from "../hooks/useSession";

const PublicEventPage = () => {

    const { session, decodedSession } = useSession()

    const [formData, setFormData] = useState({})
    const [eventFile, setEventFile] = useState(null)
    const [succesRegistration, setSuccesRegistration] = useState(null)
    console.log(formData)

    const onChangeFile = (e) => {
        setEventFile(e.target.files[0])
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

        data.append('eventImg', eventFile)
        Object
            .entries(formData)
            .forEach(([key, value]) => {
                data.append(key, value)
            })

        try {
            const response = await axios.post(process.env.REACT_APP_BASEURL + `/artist/${decodedSession._id}/event/create`, data, {
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
                        <h2 className="mb-5">Public Event</h2>
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
                                <label htmlFor="city">City</label>
                                <input
                                    onChange={onChangeInput}
                                    name="city"
                                    type="text"
                                    className="form-control"
                                    aria-describedby="city"
                                    placeholder="Enter city"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="date">Date</label>
                                <input
                                    onChange={onChangeInput}
                                    name="date"
                                    type="text"
                                    className="form-control"
                                    aria-describedby="date"
                                    placeholder="Enter date"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="inputEventImg">File input</label>
                                <input
                                    onChange={onChangeFile}
                                    type="file"
                                    name="eventImg"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Public Event</button>
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

export default PublicEventPage;
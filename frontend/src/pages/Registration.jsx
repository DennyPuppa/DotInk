import { useState } from "react";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';

const RegistrationPage = () => {

    const [formData, setFormData] = useState({})
    const [avatarFile, setAvatarFile] = useState(null)
    const [succesRegistration, setSuccesRegistration] = useState(null)
    console.log(formData)

    const onChangeFile = (e) => {
        setAvatarFile(e.target.files[0])
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

        data.append('avatarImg', avatarFile)
        Object
            .entries(formData)
            .forEach(([key, value]) => {
                data.append(key, value)
            })

        try {
            const response = await axios.post(process.env.REACT_APP_BASEURL + '/artist/create', data, {
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
                        <h2 className="mb-5">Registration</h2>
                        <form encType="multipart/form-data" onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="firstname">First Name</label>
                                <input
                                    onChange={onChangeInput}
                                    name="firstname"
                                    type="text"
                                    className="form-control"
                                    aria-describedby="firstname"
                                    placeholder="Enter firstname"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="lastname">Last Name</label>
                                <input
                                    onChange={onChangeInput}
                                    name="lastname"
                                    type="text"
                                    className="form-control"
                                    aria-describedby="first lastName"
                                    placeholder="Enter lastName"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="username">Username</label>
                                <input
                                    onChange={onChangeInput}
                                    name="username"
                                    type="text"
                                    className="form-control"
                                    aria-describedby="username"
                                    placeholder="Enter username"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    onChange={onChangeInput}
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    aria-describedby="email"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    onChange={onChangeInput}
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    aria-describedby="password"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="date">City</label>
                                <input
                                    onChange={onChangeInput}
                                    name="city"
                                    type="text"
                                    className="form-control"
                                    aria-describedby="city"
                                    placeholder="Enter city where you work"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="date">Tattoo Style</label>
                                <input
                                    onChange={onChangeInput}
                                    name="tattoostyle"
                                    type="text"
                                    className="form-control"
                                    aria-describedby="tattoostyle"
                                    placeholder="Enter your Tattoo Style"
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="inputAvatar">File input</label>
                                <input
                                    onChange={onChangeFile}
                                    type="file"
                                    name="avatarImg"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Create account</button>
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

export default RegistrationPage;
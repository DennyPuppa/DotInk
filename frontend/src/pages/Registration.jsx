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
        <>
            <section class="p-3 p-md-4 p-xl-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 bsb-tpl-bg-platinum">
                            <div class="d-flex flex-column justify-content-between h-100 p-3 p-md-4 p-xl-5">
                                <h3 class="m-0">Welcome!</h3>
                                <img class="img-fluid rounded mx-auto my-4" loading="lazy" src="./assets/img/bsb-logo.svg" width="245" height="80" alt="BootstrapBrain Logo"/>
                                    <p class="mb-0">Not a member yet? <a href="#!" class="link-secondary text-decoration-none">Register now</a></p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 bsb-tpl-bg-lotion">
                            <div class="p-3 p-md-4 p-xl-5">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-5">
                                            <h2 class="h3">Registration</h2>
                                            <h3 class="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                                        </div>
                                    </div>
                                </div>
                                <form action="#!">
                                    <div class="row gy-3 gy-md-4 overflow-hidden">
                                        <div class="col-12">
                                            <label for="firstName" class="form-label">First Name <span class="text-danger">*</span></label>
                                            <input type="email" class="form-control" name="firstName" id="firstName" placeholder="First Name" required/>
                                        </div>
                                        <div class="col-12">
                                            <label for="lastName" class="form-label">Last Name <span class="text-danger">*</span></label>
                                            <input type="email" class="form-control" name="lastName" id="lastName" placeholder="Last Name" required/>
                                        </div>
                                        <div class="col-12">
                                            <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                                            <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required/>
                                        </div>
                                        <div class="col-12">
                                            <label for="password" class="form-label">Password <span class="text-danger">*</span></label>
                                            <input type="password" class="form-control" name="password" id="password" value="" required/>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required/>
                                                    <label class="form-check-label text-secondary" for="iAgree">
                                                        I agree to the <a href="#!" class="link-primary text-decoration-none">terms and conditions</a>
                                                    </label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button class="btn bsb-btn-xl btn-primary" type="submit">Sign up</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div class="row">
                                    <div class="col-12">
                                        <hr class="mt-5 mb-4 border-secondary-subtle"/>
                                            <p class="m-0 text-secondary text-end">Already have an account? <a href="#!" class="link-primary text-decoration-none">Sign in</a></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <p class="mt-5 mb-4">Or sign in with</p>
                                        <div class="d-flex gap-3 flex-column flex-xl-row">
                                            <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                </svg>
                                                <span class="ms-2 fs-6">Google</span>
                                            </a>
                                            <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                                <span class="ms-2 fs-6">Facebook</span>
                                            </a>
                                            <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                                <span class="ms-2 fs-6">Twitter</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
        </>

    );
}

export default RegistrationPage;
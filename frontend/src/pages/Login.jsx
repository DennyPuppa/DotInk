import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Login = () => {
    
    const [formData, setFormData] = useState({})
    const [isArtist, setIsArtist] = useState(true)
    const navigate = useNavigate();

    const onChangeInput = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(process.env.REACT_APP_BASEURL + '/login/artist', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            
            if (response.ok) {
                localStorage.setItem('token', JSON.stringify(data));
                navigate('/');    
            }
            return data;
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <h2 className="mb-5">Login</h2>
                    <div className="d-flex align-items-center gap-1">
                        <p>Do not have an account?</p>
                        <Link className='nav-link' to="/registrazione"><button className='btn-registration'>Registrati</button></Link>
                    </div>
                    <form onSubmit={handleSubmit}>

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
                            <label htmlFor="password">password</label>
                            <input
                                onChange={onChangeInput}
                                name="password"
                                type="password"
                                className="form-control"
                                aria-describedby="password"
                                placeholder="Enter password"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 my-2">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
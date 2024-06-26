import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/Registration";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/registrazione" element={<RegistrationPage />} />
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
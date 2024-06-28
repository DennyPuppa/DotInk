import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/Registration";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import MyProfile from "./pages/MyProfile";
import PublicPostPage from "./pages/PostPage";
import PublicEventPage from "./pages/EventPage";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/registrazione" element={<RegistrationPage />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/artist/:id" element={<Profile />}/>
                <Route path="/account" element={<MyProfile />}/>
                <Route path="/post/create" element={<PublicPostPage />}/>
                <Route path="/event/create" element={<PublicEventPage />}/>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
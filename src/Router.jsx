import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import MyMovies from './pages/MyMovies';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Signin />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

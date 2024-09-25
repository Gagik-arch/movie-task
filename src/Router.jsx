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
                <Route
                    path='/my-movies'
                    element={<MyMovies />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

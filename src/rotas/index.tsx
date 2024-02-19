import { Route, Routes } from 'react-router-dom';
import HomeMainPages from '../pages/homeMainPages';
import RegisterMainPages from '../pages/registerMainPages'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeMainPages />} />
            <Route path="/register" element={<RegisterMainPages />} />
        </Routes>
    );
};

export default AppRoutes;

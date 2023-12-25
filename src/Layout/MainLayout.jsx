import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            
        </div>
    );
};

export default MainLayout;
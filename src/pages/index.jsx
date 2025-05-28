import React from "react";
import { Route, Routes } from 'react-router-dom';

import { Overview } from "./overview";

import '../assets/stylesheet/pages.css';

export const Pages = () => {
    return (
        <div className="main-page">
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/overview" element={<Overview />} />
            </Routes>
        </div>
    )
}
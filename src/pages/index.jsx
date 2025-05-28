import React from "react";
import { Route, Routes } from 'react-router-dom';

import { Overview } from "./overview";
import { Referral } from "./referral";
import { HowToBuy } from "./howToBuy";

import '../assets/stylesheet/pages.css';

export const Pages = () => {
    return (
        <div className="main-page">
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/referral" element={<Referral />} />
                <Route path="/howtobuy" element={<HowToBuy />} />
            </Routes>
        </div>
    )
}
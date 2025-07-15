import React from "react";
import { Route, Routes } from 'react-router-dom';

// Page Components
import { Overview } from "./overview";
import { Referral } from "./referral";
import { HowToBuy } from "./howToBuy";
import { Profile } from "./profile";

// Styles
import '../assets/stylesheet/pages.css';

export const Pages = () =>
    <div className="main-page">
        <Routes>
            {/* Default and Overview Routes */}
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />

            {/* Feature Routes */}
            <Route path="/referral" element={<Referral />} />
            <Route path="/howtobuy" element={<HowToBuy />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>

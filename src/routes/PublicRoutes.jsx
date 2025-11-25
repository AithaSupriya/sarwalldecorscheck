// src/routes/PublicRoutes.jsx
import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import StickyNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const PublicRoutes = () => {
    const tailorData = localStorage.getItem("userData");
    if (tailorData) return <Navigate to="/tailor/dashboard" replace />;

    return (
        <>
            <StickyNavbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default PublicRoutes;
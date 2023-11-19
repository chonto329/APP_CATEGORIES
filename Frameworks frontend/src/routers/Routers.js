import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Categoria } from "../components/categorias/Categoria";
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';

export const Routers = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/categoria' element={<Categoria />} />

                <Route path='*' element={<Navigate to='/categoria' />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
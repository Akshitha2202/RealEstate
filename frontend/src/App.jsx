import React from 'react';
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import CardDetails from "./components/CardDetails";
import Contact from "./components/Contact"; // Import Contact page
import About from "./components/About"; // Import About page
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
    const [authUser, setAuthUser] = useAuth();
    console.log(authUser);

    return (
        <>
            <div className="dark:bg-slate-500 dark:text-white">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/card/:id" element={<CardDetails />} />
                    <Route path="/contact" element={<Contact />} /> {/* New route for Contact */}
                    <Route path="/about" element={<About />} /> {/* New route for About */}
                </Routes>
                <Toaster />
            </div>
        </>
    );
}

export default App;

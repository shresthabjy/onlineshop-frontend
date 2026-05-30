import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./sidebar";
import Header from "./Header";

function Layout() {

    const [isOpen, setIsOpen] = useState(true);

    return (

        <div className="h-screen bg-[#F3F5F7] overflow-hidden">

            {/* Header */}
            <Header />
            {/* Main */}
            <div className="flex h-[calc(100vh-64px)]">

                {/* Floating Sidebar */}
                <div className="absolute top-0 left-0 z-50 h-full">

                    <Sidebar
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </div>
                {/* Content */}
                <div className="flex-1 ml-64 overflow-auto">
                    <Outlet />

                </div>

            </div>

        </div>
    );
}

export default Layout;
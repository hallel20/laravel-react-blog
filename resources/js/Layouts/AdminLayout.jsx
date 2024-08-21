import { useState } from "react";
import AdminNavBar from "@/Components/AdminNavbar";
import AdminSidebar from "@/Components/AdminSidebar";
import { Link } from "@inertiajs/react";

export default function AdminLayout({ user, children }) {
    return (
        <>
            <div className="row">
                <AdminNavBar user={user} />
                <AdminSidebar />
                <div className="col-md-3"></div>
                <div className="col-md-9 relative">{children}</div>
            </div>
        </>
    );
}

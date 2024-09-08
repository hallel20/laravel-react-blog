import { useState } from "react";
import { Link } from "@inertiajs/react";
import AdminNavLink from "./AdminNavLink";

export default function AdminSidebar() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button
                className="md:hidden fixed z-40 left-0 top-24 rounded-md p-2 bg-indigo-200"
                onClick={() => setOpen((previousState) => !previousState)}
            >
                {open == true ? (
                    <i className="fa fa-chevron-left"></i>
                ) : (
                    <i className="fa fa-chevron-right"></i>
                )}
            </button>
            {open == true ? (
                <div className="col-md-2 sidebar fixed bg-violet-950">
                    <div className="mt-5 mx-2">
                        <h2 className="text-indigo-800">
                            <i className="fa-solid fa-dashboard"></i> Dashboard
                        </h2>
                        <br />
                    </div>
                    <hr className="text-indigo-800" />
                    <div className="sidebar-menu text-indigo-800">
                        <section className="relative">
                            <AdminNavLink
                                href={route("admin")}
                                active={route().current("admin")}
                            >
                                Home
                            </AdminNavLink>
                            <AdminNavLink
                                href={route("admin.new-post")}
                                active={route().current("admin.new-post")}
                            >
                                New Post
                            </AdminNavLink>
                            <AdminNavLink
                                href={route("admin.posts")}
                                active={route().current("admin.posts")}
                            >
                                All Posts
                            </AdminNavLink>
                            <AdminNavLink
                                href={route("admin.categories")}
                                active={route().current("admin.categories")}
                            >
                                Categories
                            </AdminNavLink>
                        </section>
                        <div className="blog-view">
                            <Link href="/">
                                <i className="fa-solid fa-eye"></i>Visit Blog
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="col-md-3 sidebar fixed bg-violet-950 hidden md:block">
                    <div className="mt-5 mx-2">
                        <h2 className="text-indigo-800">
                            <i className="fa-solid fa-dashboard"></i> Dashboard
                        </h2>
                        <br />
                    </div>
                    <hr className="text-indigo-800" />
                    <div className="sidebar-menu text-indigo-800">
                        <section className="relative">
                            <AdminNavLink
                                href={route("admin")}
                                active={route().current("admin")}
                            >
                                Home
                            </AdminNavLink>
                            <AdminNavLink
                                href={route("admin.new-post")}
                                active={route().current("admin.new-post")}
                            >
                                New Post
                            </AdminNavLink>
                            <AdminNavLink
                                href={route("admin.posts")}
                                active={route().current("admin.posts")}
                            >
                                All Posts
                            </AdminNavLink>
                            <AdminNavLink
                                href={route("admin.categories")}
                                active={route().current("admin.categories")}
                            >
                                Categories
                            </AdminNavLink>
                        </section>
                        <div className="blog-view">
                            <Link href="/">
                                <i className="fa-solid fa-eye"></i>Visit Blog
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

import { Link } from "@inertiajs/react";
import logo from "../../images/logo.png";
import { useState } from "react";
import Dropdown from "@/Components/Dropdown";

export default function MainLayout({ user, children }) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const admin = user?.admin;
    return (
        <>
            <header>
                <nav className="justify-content-between navbar desktop-navbar sticky-top">
                    <div className="container">
                        <Link href="/">
                            <div className="d-flex align-items-center mx-2 brand">
                                <img
                                    src={logo}
                                    alt="blogwiz"
                                    className="logo"
                                    width="60"
                                />
                                <h1 className="text-4xl font-bold">Blogwiz</h1>
                            </div>
                        </Link>
                        <ul className="nav-list d-flex align-middle">
                            <Link href="/" className="nav-link">
                                <li className="nav-item">Home</li>
                            </Link>
                            <Link href="/posts" className="nav-link">
                                <li className="nav-item">Blog</li>
                            </Link>
                            <Link href="/about-us" className="nav-link">
                                <li className="nav-item">About</li>
                            </Link>
                            <Link href="/contact-us" className="nav-link">
                                <li className="nav-item">Contact</li>
                            </Link>

                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-violet-300 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            <i className="fa fa-user"></i>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                {user && (
                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            <i className="fa fa-user"></i>&nbsp;
                                            Profile
                                        </Dropdown.Link>
                                        {admin == true ? (
                                            <Dropdown.Link
                                                href={route("admin")}
                                                className="nav-link"
                                            >
                                                <i className="fa fa-gear"></i>
                                                &nbsp; Manage
                                            </Dropdown.Link>
                                        ) : null}
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            <i className="fas fa-sign-out"></i>
                                            &nbsp; Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                )}
                                {!user && (
                                    <Dropdown.Content>
                                        <Dropdown.Link href={route("login")}>
                                            <i className="fas fa-sign-in"></i>
                                            &nbsp; Login
                                        </Dropdown.Link>
                                        <Dropdown.Link href={route("register")}>
                                            <i className="fa fa-plus"></i>&nbsp;
                                            Register
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                )}
                            </Dropdown>
                        </ul>
                    </div>
                </nav>
                <nav className="mobile-navbar py-3 align-middle">
                    <div className="d-flex justify-between">
                        <div className="d-flex">
                            <Link href="/" className="max-content">
                                <img
                                    src={logo}
                                    width="50"
                                    alt="blogwiz"
                                    className="max-content"
                                />
                            </Link>
                            <p className="text-3xl font-bold mx-1 flex max-content">
                                Blogwiz
                            </p>
                        </div>
                        <div className="max-content">
                            <button
                                id="navbarOpen"
                                className="toggle-button"
                                onClick={() => setNavbarOpen(true)}
                            >
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </nav>
                <div
                    className="mobile-nav"
                    style={{ width: navbarOpen ? "200px" : "0px" }}
                >
                    <button
                        id="navbarClose"
                        className="toggle-button"
                        onClick={() => setNavbarOpen(false)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <div style={{ position: "relative" }}>
                        <ul className="nav-list text-start">
                            <Link href="/" className="nav-link">
                                <li className="nav-list">Home</li>
                            </Link>
                            <Link href="/posts" className="nav-link">
                                <li className="nav-list">Blog</li>
                            </Link>
                            <Link href="/about-us" className="nav-link">
                                <li className="nav-list">About</li>
                            </Link>
                            <Link href="/contact-us" className="nav-link">
                                <li className="nav-list">Contact</li>
                            </Link>
                            <br />
                            <hr />
                            {user && (
                                <>
                                    <Link
                                        href={route("profile.edit")}
                                        className="nav-link"
                                    >
                                        <i className="fa fa-user"></i>&nbsp;
                                        Profile
                                    </Link>
                                    {admin == true ? (
                                        <Link
                                            href={route("admin")}
                                            className="nav-link"
                                        >
                                            <i className="fa fa-gear"></i>&nbsp;
                                            Manage{" "}
                                        </Link>
                                    ) : null}
                                    <br />
                                    <hr />
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="nav-link"
                                    >
                                        {" "}
                                        Log out&nbsp;
                                        <i className="fas fa-sign-out"></i>
                                    </Link>
                                </>
                            )}
                            {!user && (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="nav-link"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="nav-link"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="nav-spacer"></div>
            </header>
            <main>{children}</main>
            <footer className="text-center py-4 text-gray-600">
                &copy; Blogwiz 2024 - Made with love by Cyberwizdev
            </footer>
        </>
    );
}

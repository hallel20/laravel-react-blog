import { Link } from "@inertiajs/react";

export default function AdminNavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex menu-item items-center rounded-md text-gray-200 text-lg font-bold hover:ms-2  " +
                (active
                    ? "border-indigo-400 bg-violet-900 "
                    : "hover:text-gray-200 hover:bg-violet-800 focus:text-gray-100 ") +
                className
            }
        >
            {children}
        </Link>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in! <br />
                            {auth.user.admin == true && (
                                <Link href={route("admin")}>
                                    Admin Panel{" "}
                                    <i className="fa fa-chevron-right"></i>
                                </Link>
                            )}
                            <br />
                            <Link href={route("home")}>
                                Check blog posts&nbsp;
                                <i className="fa fa-chevron-right"></i>
                            </Link>
                            <br />
                            <br />
                            <Link href="#">
                                Check my Comments&nbsp;
                                <i className="fa fa-chevron-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

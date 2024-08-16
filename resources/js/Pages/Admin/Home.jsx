import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Home({ auth }) {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Dashboard" />
            <div className="container">
                <div className="row p-4 admin-container">
                    <h2 className="text-3xl">Welcome to your Dashboard</h2>
                    <div className="post-summary">
                        <h2 className="text-2xl py-3">Post Summary</h2>
                        <p className="text-xl mb-3">Recent Posts</p>
                        <table className="table table-striped table-secondary table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>Title</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A new kind of Post</td>
                                    <td>3 Comments</td>
                                </tr>
                                <tr>
                                    <td>A new kind of Post</td>
                                    <td>36 Comments</td>
                                </tr>
                                <tr>
                                    <td>A new kind of Post</td>
                                    <td>28 Comments</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3 className="text-xl my-4">Popular Posts</h3>
                        <table className="table table-primary table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A new kind of Post</td>
                                    <td>73 Comments</td>
                                </tr>
                                <tr>
                                    <td>A new kind of Post</td>
                                    <td>65 Comments</td>
                                </tr>
                                <tr>
                                    <td>A new kind of Post</td>
                                    <td>55 Comments</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

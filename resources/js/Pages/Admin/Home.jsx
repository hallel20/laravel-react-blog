import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import dayjs from "dayjs";

export default function Home({ auth, latest_posts }) {
    console.log(latest_posts);
    return (
        <AdminLayout user={auth.user}>
            <Head title="Dashboard" />
            <div className="container">
                <div className="row p-4 admin-container">
                    <h2 className="text-3xl">Welcome to your Dashboard</h2>
                    <div className="post-summary">
                        <h2 className="text-2xl py-3 text-center">
                            Post Summary
                        </h2>
                        <p className="text-xl mb-3">Recent Posts</p>
                        <div className="w-11/12 mx-auto">
                            <table className="table table-striped table-secondary table-hover text-sm">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>Title</th>
                                        <th>Comments</th>
                                        <th>Last Updated</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {latest_posts.map((post) => (
                                        <tr key={post.id}>
                                            <td>{post.title}</td>
                                            <td>3 Comments</td>
                                            <td>
                                                {dayjs(
                                                    post.updated_at
                                                ).toString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <h3 className="text-xl my-4">Popular Posts</h3>
                        <div className="w-11/12 mx-auto">
                            <table className="table table-primary table-striped table-hover text-sm">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Comments</th>
                                        <th>Last Updated</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {latest_posts.map((post) => (
                                        <tr key={post.id}>
                                            <td>{post.title}</td>
                                            <td>3 Comments</td>
                                            <td>
                                                {dayjs(
                                                    post.updated_at
                                                ).toString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

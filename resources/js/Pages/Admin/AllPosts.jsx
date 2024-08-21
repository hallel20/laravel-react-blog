import Loading from "@/Components/Loading";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import EditPost from "./EditPost";

export default function AllPosts({ auth }) {
    const [editId, setEditId] = useState("");

    return (
        <AdminLayout user={auth.user}>
            <Head title="All Blog Posts"></Head>
            <div className="row relative justify-center align-middle p-5">
                {/* <Loading /> */}
                <div className="container">
                    <h2 className="text-3xl">All Blog Posts</h2>
                    <div className="admin-container">
                        <table className="table table-hover table-secondary table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Post Title</th>
                                    <th>Comments</th>
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>What is Life?</td>
                                    <td>
                                        <i className="fa-regular fa-comments"></i>{" "}
                                        15
                                    </td>
                                    <td>Lifestyle</td>
                                    <td className="space-x-2">
                                        <button
                                            className="btn btn-info"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit-post-modal"
                                            onClick={() => {
                                                setEditId("1");
                                                console.log(editId);
                                            }}
                                        >
                                            <i className="fa-solid fa-pencil-square"></i>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger">
                                            <i className="fa-solid fa-trash-can"></i>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>What is Life?</td>
                                    <td>
                                        <i className="fa-regular fa-comments"></i>{" "}
                                        15
                                    </td>
                                    <td>Lifestyle</td>
                                    <td className="space-x-2">
                                        <button
                                            className="btn btn-info"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit-post-modal"
                                            onClick={() => {
                                                setEditId("1");
                                                console.log(editId);
                                            }}
                                        >
                                            <i className="fa-solid fa-pencil-square"></i>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger">
                                            <i className="fa-solid fa-trash-can"></i>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>What is Life?</td>
                                    <td>
                                        <i className="fa-regular fa-comments"></i>{" "}
                                        15
                                    </td>
                                    <td>Lifestyle</td>
                                    <td className="space-x-2">
                                        <button
                                            className="btn btn-info"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit-post-modal"
                                            onClick={() => {
                                                setEditId("1");
                                                console.log(editId);
                                            }}
                                        >
                                            <i className="fa-solid fa-pencil-square"></i>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger">
                                            <i className="fa-solid fa-trash-can"></i>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>What is Life?</td>
                                    <td>
                                        <i className="fa-regular fa-comments"></i>{" "}
                                        15
                                    </td>
                                    <td>Lifestyle</td>
                                    <td className="space-x-2">
                                        <button
                                            className="btn btn-info"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit-post-modal"
                                            onClick={() => {
                                                setEditId("1");
                                                console.log(editId);
                                            }}
                                        >
                                            <i className="fa-solid fa-pencil-square"></i>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger">
                                            <i className="fa-solid fa-trash-can"></i>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* Edit Post Modal */}
                        <div className="modal fade" id="edit-post-modal">
                            <EditPost user={auth.user} />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

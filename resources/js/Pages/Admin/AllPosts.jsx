import Loading from "@/Components/Loading";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function AllPosts({ auth }) {
    const [file, setFile] = useState("");
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
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h2 className="text-3xl">Edit Post</h2>
                                    </div>
                                    <div className="modal-body">
                                        {/* Edit Post Form */}
                                        <form
                                            className="post-form"
                                            method="POST"
                                            action="/posts"
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            <div className="relative p-3">
                                                <label
                                                    htmlFor="title"
                                                    className="text-1xl mt-4"
                                                >
                                                    Post Title
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control my-3"
                                                    name="title"
                                                    id="title"
                                                />
                                                <p className="text-1xl mt-3">
                                                    Post Image
                                                </p>
                                                <br />
                                                <label
                                                    htmlFor="image"
                                                    className="post-image block"
                                                >
                                                    <i className="fa-solid fa-camera"></i>
                                                </label>
                                                {file ? (
                                                    <img
                                                        src={file}
                                                        alt="Your Image"
                                                    />
                                                ) : null}
                                                <input
                                                    type="file"
                                                    name="image"
                                                    id="image"
                                                    onChange={(e) => {
                                                        setFile(e.target.value);
                                                    }}
                                                    hidden
                                                />

                                                <label
                                                    htmlFor="category"
                                                    className="text-1xl mt-4"
                                                >
                                                    Category
                                                </label>
                                                <select
                                                    name="category"
                                                    id="category"
                                                    className="block form-control"
                                                >
                                                    <option value="">
                                                        Select a Category
                                                    </option>
                                                    <option value="sports">
                                                        Sports
                                                    </option>
                                                    <option value="health">
                                                        Health
                                                    </option>
                                                    <option value="lifestyle">
                                                        Lifestyle
                                                    </option>
                                                    <option value="technology">
                                                        Technology
                                                    </option>
                                                </select>
                                                <label
                                                    htmlFor="content"
                                                    className="text-1xl mt-4"
                                                >
                                                    Post Content
                                                </label>
                                                <textarea
                                                    name="content"
                                                    className="form-control my-3"
                                                    id="content"
                                                    rows="13"
                                                ></textarea>

                                                <div className="form-group text-end">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

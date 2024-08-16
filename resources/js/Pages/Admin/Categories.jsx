import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function ({ auth }) {
    const [editId, setEditId] = useState("");
    return (
        <AdminLayout user={auth.user}>
            <Head title="Category Admin" />
            <div className="container">
                <div className="row my-3 admin-container mx-10">
                    <div className="flex justify-between my-4">
                        <div>
                            <h2 className="text-3xl">All Post Categories</h2>
                        </div>
                        <div>
                            <button
                                className="btn btn-outline-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-post-modal"
                                onClick={() => {
                                    setEditId("");
                                    console.log(editId);
                                }}
                            >
                                <i className="fa-solid fa-pencil-square"></i>Add
                                Category
                            </button>
                        </div>
                    </div>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
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
                                <td>2</td>
                                <td>Technology</td>
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
                                <td>3</td>
                                <td>Sports</td>
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
                                <td>4</td>
                                <td>Nature</td>
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
                                <td>5</td>
                                <td>Comedy</td>
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
                                <td>6</td>
                                <td>Religion</td>
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
                    <div className="modal fade" id="edit-post-modal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="text-3xl">
                                        {editId == ""
                                            ? "Add Category"
                                            : "Edit Category"}
                                    </h2>
                                </div>
                                <div className="modal-body">
                                    {/* Edit Post Form */}
                                    <form
                                        className="post-form"
                                        method="POST"
                                        action="/categories"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        <div className="relative p-3">
                                            <label
                                                htmlFor="name"
                                                className="text-1xl mt-4"
                                            >
                                                Category Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control my-3"
                                                name="name"
                                                id="name"
                                            />

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
        </AdminLayout>
    );
}

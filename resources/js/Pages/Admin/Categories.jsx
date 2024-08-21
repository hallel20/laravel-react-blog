import AdminLayout from "@/Layouts/AdminLayout";
import { Head, router } from "@inertiajs/react";
import Newcategory from "./Newcategory";

export default function ({ auth, categories }) {
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
                                className="btn btn-outline-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-post-modal"
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
                            {categories.map((category) => (
                                <tr key={category.id}>
                                    <td>{category.id}</td>
                                    <td>{category.name}</td>
                                    <td className="space-x-2">
                                        <button className="btn btn-sm btn-danger">
                                            <i className="fa-solid fa-trash-can"></i>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="modal fade" id="edit-post-modal">
                        <Newcategory />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function EditPost({ user }) {
    const [file, setFile] = useState("");
    const { data, setData, patch, processing, reset, errors } = useForm({
        title: "",
        category_id: 1,
        content: "",
        user_id: user.id,
    });
    return (
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
                            <label htmlFor="title" className="text-1xl mt-4">
                                Post Title
                            </label>
                            <input
                                type="text"
                                className="form-control my-3"
                                name="title"
                                id="title"
                            />
                            <p className="text-1xl mt-3">Post Image</p>
                            <br />
                            <label htmlFor="image" className="post-image block">
                                <i className="fa-solid fa-camera"></i>
                            </label>
                            {file ? <img src={file} alt="Your Image" /> : null}
                            <input
                                type="file"
                                name="image"
                                id="image"
                                onChange={(e) => {
                                    setFile(e.target.value);
                                }}
                                hidden
                            />

                            <label htmlFor="category" className="text-1xl mt-4">
                                Category
                            </label>
                            <select
                                name="category"
                                id="category"
                                className="block form-control"
                            >
                                <option value="">Select a Category</option>
                                <option value="sports">Sports</option>
                                <option value="health">Health</option>
                                <option value="lifestyle">Lifestyle</option>
                                <option value="technology">Technology</option>
                            </select>
                            <label htmlFor="content" className="text-1xl mt-4">
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
    );
}

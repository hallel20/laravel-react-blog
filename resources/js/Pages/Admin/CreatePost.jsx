import Loading from "@/Components/Loading";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function CreatePost({ auth }) {
    // const { register, control, handleSubmit } = useForm<PostForm>();

    const [file, setFile] = useState("");

    return (
        <AdminLayout user={auth.user}>
            <Head title="Create Post"></Head>
            {/* <Loading /> */}
            <div className="container">
                <div className="row justify-content-center align-items-center py-5">
                    <form
                        className="post-form"
                        method="POST"
                        action="/posts"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="relative p-3">
                            <h2 className="text-3xl">Create a New Post</h2>
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
        </AdminLayout>
    );
}

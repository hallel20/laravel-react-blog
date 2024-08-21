import InputError from "@/Components/InputError";
import Loading from "@/Components/Loading";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";

export default function CreatePost({ auth, categories }) {
    // const { register, control, handleSubmit } = useForm<PostForm>();

    const { data, setData, post, processing, progress, reset, errors } =
        useForm({
            title: "",
            category_id: "",
            image: "",
            content: "",
            user_id: auth.user.id,
        });

    return (
        <AdminLayout user={auth.user}>
            <Head title="Create Post"></Head>
            {processing && <Loading />}
            <div className="container">
                <div className="row justify-content-center align-items-center py-5">
                    <form
                        className="post-form"
                        method="POST"
                        action="/posts"
                        onSubmit={(e) => {
                            e.preventDefault();
                            // console.log(data);
                            post(route("posts.store"), {
                                onSuccess: () => reset(),
                            });
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
                                value={data.title}
                                id="title"
                                required
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.title}
                                className="bg-red-600 rounded-md text-white"
                            />
                            {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}
                            <p className="text-1xl mt-3">Post Image</p>
                            <br />
                            {data.image != "" ? (
                                <img
                                    src={data.image}
                                    width="50"
                                    alt="Your Image"
                                />
                            ) : null}
                            <label htmlFor="image" className="post-image block">
                                <i className="fa-solid fa-camera"></i>
                            </label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                // value={data.image}
                                onChange={(e) =>
                                    setData("image", e.target.files[0])
                                }
                                hidden
                            />

                            <label htmlFor="category" className="text-1xl mt-4">
                                Category
                            </label>
                            <select
                                name="category"
                                id="category"
                                className="block rounded-sm"
                                onChange={(e) =>
                                    setData("category_id", e.target.value)
                                }
                            >
                                <option value="">Select a Category</option>
                                {categories.map((category) => (
                                    <option
                                        value={category.id}
                                        key={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="content" className="text-1xl mt-4">
                                Post Content
                            </label>
                            <textarea
                                name="content"
                                className="form-control my-3"
                                id="content"
                                value={data.content}
                                rows="13"
                                required
                                onChange={(e) =>
                                    setData("content", e.target.value)
                                }
                            ></textarea>
                            <InputError
                                message={errors.message}
                                className="mt-2"
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
        </AdminLayout>
    );
}

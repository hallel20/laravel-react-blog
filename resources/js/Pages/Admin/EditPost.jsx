import { Head, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Loading from "@/Components/Loading";

export default function EditPost({ auth, post }) {
    //declaration of post
    post = Object.values(post)[0];

    const { data, setData, put, processing, reset, errors } = useForm({
        title: post.title,
        category_id: post.category_id,
        image: post.image,
        content: post.content,
    });
    return (
        <AdminLayout user={auth.user}>
            <div className="relative">
                {processing && <Loading />}
                <div className="mx-5 my-5">
                    <Head>
                        <title>{post.title}</title>
                    </Head>
                    <div className="mb-4">
                        <h2 className="text-3xl">Edit Post </h2>
                        <p className="my-3">
                            <b>"{post.title}"</b>
                        </p>
                    </div>
                    <div>
                        {/* Edit Post Form */}
                        <form
                            className="post-form"
                            method="POST"
                            action="/posts"
                            onSubmit={(e) => {
                                e.preventDefault();
                                put("posts.update", data);
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
                                    value={data.title}
                                    id="title"
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                <p className="text-1xl mt-3">Post Image</p>
                                <br />
                                <div className="flex space-x-5">
                                    {data.image ? (
                                        <img
                                            src={`/${data.image}`}
                                            alt="Your Image"
                                            width="100"
                                        />
                                    ) : null}
                                    <label
                                        htmlFor="image"
                                        className="post-image"
                                    >
                                        <i className="fa-solid fa-camera"></i>
                                    </label>
                                </div>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    onChange={(e) => {
                                        setData("image", e.target.value);
                                    }}
                                    hidden
                                />

                                <label
                                    htmlFor="category"
                                    className="text-1xl mt-4"
                                >
                                    Category
                                </label>
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
                                    value={data.content}
                                    onChange={(e) =>
                                        setData("content", e.target.value)
                                    }
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
        </AdminLayout>
    );
}

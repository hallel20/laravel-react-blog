import Loading from "@/Components/Loading";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import EditPost from "./EditPost";
import PostTableRow from "@/Components/PostTableRow";
import { useState } from "react";

export default function AllPosts({ auth, posts }) {
    const [notice, setNotice] = useState(false);

    const handleNotice = () => {
        setNotice(true);
        setTimeout(() => {
            setNotice(false);
        }, 3000);
    };

    let i = 1;

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
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.data.map(
                                    (post, i) => (
                                        <PostTableRow
                                            key={post.id}
                                            id={i + 1}
                                            post={post}
                                            handleNotice={handleNotice}
                                        />
                                    ),
                                    i++
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {notice && (
                <p className="bg-red-600 text-white py-2 px-1 rounded-md right-4 bottom-3 fixed">
                    Post Successfully Deleted!
                </p>
            )}
        </AdminLayout>
    );
}

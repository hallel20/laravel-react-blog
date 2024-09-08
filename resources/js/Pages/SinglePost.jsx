import authorImage from "../../images/author.jpg";
import { Head } from "@inertiajs/react";
import SingleLayout from "@/Layouts/SingleLayout";
import CommentSection from "@/Components/CommentSection";

export default function SinglePost({ auth, post, comments, author }) {
    return (
        <SingleLayout user={auth.user}>
            <Head title={post.title} />
            <h1 className="md:text-4xl text-2xl font-bold mt-3">
                {post.title}
            </h1>
            <img
                src={`/${post.image}`}
                alt="Post-Image"
                className="my-4 rounded-lg"
            />
            <div className="text-gray-700 text-justify">{post.content}</div>
            <div className="author justify-end d-flex pt-2">
                <p className="font-bold text-gray-500">
                    &#8212;{author[0].name}
                </p>
                <div className="rounded-full border-solid shadow-lg border-white">
                    <img
                        src={authorImage}
                        alt="Author"
                        width="30"
                        className="rounded-full"
                    />
                </div>
            </div>
            <br />
            <CommentSection
                postId={post.id}
                user={auth.user}
                comments={comments}
            />
        </SingleLayout>
    );
}

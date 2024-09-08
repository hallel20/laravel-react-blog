import { Link } from "@inertiajs/react";

export default function PostTableRow({ post, id, handleNotice }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{post.title}</td>
            {/* <td>
                <i className="fa-regular fa-comments"></i> 15
            </td> */}
            <td>{post.category.name}</td>
            <td className="space-x-2 text-center space-y-2">
                <Link
                    href={`/admin/posts/edit/${post.id}`}
                    className="btn btn-info btn-sm text-xs"
                >
                    <i className="fa-solid fa-pencil-square"></i>&nbsp; Edit
                </Link>
                <Link
                    as="button"
                    method="delete"
                    href={route("posts.destroy", post)}
                    onSuccess={handleNotice}
                    className="btn btn-danger btn-sm text-xs"
                >
                    <i className="fa-solid fa-trash-can"></i>&nbsp; Delete
                </Link>
            </td>
        </tr>
    );
}

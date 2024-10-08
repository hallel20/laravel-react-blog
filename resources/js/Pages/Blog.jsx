import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import author from "../../images/author.jpg";
import Pagination from "@/Components/Pagination";

export default function Blog({ auth, posts }) {
    // console.log(posts);
    function truncate(str, maxLenght) {
        return str.length > maxLenght ? str.slice(0, maxLenght - 1) : str;
    }
    return (
        <MainLayout user={auth.user}>
            <Head title="Blog Posts" />
            <div className="container">
                <h1 className="text-4xl my-4 mx-3">See all our Posts</h1>
                <div className="row">
                    <div className="col-lg-9">
                        {posts[0] != null ? (
                            posts.map((post) => (
                                <div
                                    className="post-list-card my-5"
                                    key={post.id}
                                >
                                    <div className="post-card-image">
                                        <div className="image-container">
                                            <Link
                                                href={`/categories/${post.category.name}`}
                                            >
                                                <span className="category">
                                                    {post.category.name}
                                                </span>
                                            </Link>
                                            <img
                                                src={`/${post.image}`}
                                                alt="Nature"
                                            />
                                        </div>
                                    </div>
                                    <div className="post-card-content my-3 md:mx-4 sm:px-1">
                                        <h3 className="mb-2">
                                            <Link href={`/posts/${post.id}`}>
                                                Ipsum minima et illo
                                                reprehenderit quas possimus
                                            </Link>
                                        </h3>
                                        <div className="metadata mb-2 mt-1">
                                            <i className="fa-solid fa-calendar"></i>{" "}
                                            11-08-2024
                                        </div>
                                        <p className="text-justify mb-3">
                                            {truncate(post.content, 250) +
                                                "..."}
                                        </p>
                                        <Link href={`/posts/${post.id}`}>
                                            <button className="btn btn-outline-primary">
                                                Read More{" "}
                                                <i className="fa fa-chevron-right"></i>
                                            </button>
                                        </Link>
                                        <Link href="#">
                                            <div className="post-author d-flex float-end align-baseline">
                                                <p className="text-gray-600">
                                                    {post.user.name}
                                                </p>
                                                <img
                                                    src={author}
                                                    width="40"
                                                    alt="Author"
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-4xl text-center">
                                There are no posts to show
                            </p>
                        )}
                        <Pagination />
                    </div>
                    <div className="col-lg-3 lg:block sm:hidden">
                        <h2 className="text-3xl font-bold">Categories</h2>
                        <br />
                        <hr />
                        <br />
                        <Link href="#">
                            <p className="text-2xl ms-3 font-semibold">
                                Lifestyle
                            </p>
                        </Link>
                        <br />
                        <Link href="#">
                            <p className="text-2xl ms-3 font-semibold">
                                Technology
                            </p>
                        </Link>
                        <br />
                        <Link href="#">
                            <p className="text-2xl ms-3 font-semibold">
                                Sports
                            </p>
                        </Link>
                        <br />
                        <Link href="#">
                            <p className="text-2xl ms-3 font-semibold">Music</p>
                        </Link>
                        <br />
                        <Link href="#">
                            <p className="text-2xl ms-3 font-semibold">
                                Religion
                            </p>
                        </Link>
                        <br />
                        <Link href="#">
                            <p className="text-2xl ms-3 font-semibold">
                                Culture
                            </p>
                        </Link>
                        <br />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

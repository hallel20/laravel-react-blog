import MainLayout from "@/Layouts/MainLayout";
import { Link, Head } from "@inertiajs/react";
import nature from "../../images/nature.jpg";
import author from "../../images/author.jpg";

export default function Welcome({ auth }) {
    return (
        <MainLayout user={auth.user}>
            <Head title="Welcome" />
            <div className="page-cover row">
                <h1 className="display-3">Welcome to My Blog</h1>
            </div>
            <div className="container">
                <div className="category-section w-11/12 mx-auto md:block hidden mt-4">
                    <p className=" text-center text-3xl py-3">Categories</p>
                    <ul className="flex overflow-hidden justify-between text-white font-bold">
                        <li className="bg-blue-300 rounded-xl px-2 py-1">
                            Lifestyle
                        </li>
                        <li className="bg-blue-300 rounded-xl px-2 py-1">
                            Technology
                        </li>
                        <li className="bg-blue-300 rounded-xl px-2 py-1">
                            Sports
                        </li>
                        <li className="bg-blue-300 rounded-xl px-2 py-1">
                            Religion
                        </li>
                        <li className="bg-blue-300 rounded-xl px-2 py-1">
                            Astronomy
                        </li>
                    </ul>
                </div>
                <div className="row my-5">
                    <h2 className="text-3xl mb-4">Latest Posts</h2>
                    <div className="post-card">
                        <div className="image-container">
                            <span className="category">Lifestyle</span>
                            <img src={nature} width="300" alt="" />
                        </div>
                        <div className="metadata mb-2 mt-1">
                            <i className="fa-solid fa-calendar"></i> 11-08-2024
                        </div>
                        <div className="post-card-content my-3">
                            <h3 className="my-2">
                                <Link href="/posts/{{ $post->id }}">
                                    Ipsum minima et illo reprehenderit quas
                                    possimus
                                </Link>
                            </h3>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsum minima et illo
                                reprehenderit quas possimus volupta repundiandae
                                cum expedita, eveniet aliquid,
                            </p>
                            {/* {{ $post->tags }} */}
                        </div>
                        <div className="post-author d-flex align-middle">
                            <img src={author} width="30" alt="" />
                            <span>Cyberwizdev</span>
                        </div>
                    </div>
                    <div className="post-card">
                        <div className="image-container">
                            <span className="category">Lifestyle</span>
                            <img src={nature} width="300" alt="" />
                        </div>
                        <div className="metadata mb-2 mt-1">
                            <i className="fa-solid fa-calendar"></i> 11-08-2024
                        </div>
                        <div className="post-card-content my-3">
                            <h3 className="my-2">
                                <Link href="/posts/{{ $post->id }}">
                                    Ipsum minima et illo reprehenderit quas
                                    possimus
                                </Link>
                            </h3>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsum minima et illo
                                reprehenderit quas possimus volupta repundiandae
                                cum expedita, eveniet aliquid,
                            </p>
                            {/* {{ $post->tags }} */}
                        </div>
                        <div className="post-author d-flex align-middle">
                            <img src={author} width="30" alt="" />
                            <span>Cyberwizdev</span>
                        </div>
                    </div>
                    <div className="post-card">
                        <div className="image-container">
                            <span className="category">Lifestyle</span>
                            <img src={nature} width="300" alt="" />
                        </div>
                        <div className="metadata mb-2 mt-1">
                            <i className="fa-solid fa-calendar"></i> 11-08-2024
                        </div>
                        <div className="post-card-content my-3">
                            <h3 className="my-2">
                                <Link href="/posts/{{ $post->id }}">
                                    Ipsum minima et illo reprehenderit quas
                                    possimus
                                </Link>
                            </h3>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsum minima et illo
                                reprehenderit quas possimus volupta repundiandae
                                cum expedita, eveniet aliquid,
                            </p>
                            {/* {{ $post->tags }} */}
                        </div>
                        <div className="post-author d-flex align-middle">
                            <img src={author} width="30" alt="" />
                            <span>Cyberwizdev</span>
                        </div>
                    </div>
                    <hr className="text-gray-400" />
                    <br />
                </div>
                {/* Popular posts section */}
                <h2 className="text-3xl font-bold my-4 border-bottom">
                    Popular Posts
                </h2>
                <div className="row">
                    <div className="post-card">
                        <div className="image-container">
                            <span className="category">Lifestyle</span>
                            <img src={nature} width="300" alt="" />
                        </div>
                        <div className="metadata mb-2 mt-1">
                            <i className="fa-solid fa-calendar"></i> 11-08-2024
                        </div>
                        <div className="post-card-content my-3">
                            <h3 className="my-2">
                                <Link href="/posts/{{ $post->id }}">
                                    Ipsum minima et illo reprehenderit quas
                                    possimus
                                </Link>
                            </h3>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsum minima et illo
                                reprehenderit quas possimus volupta repundiandae
                                cum expedita, eveniet aliquid,
                            </p>
                            {/* {{ $post->tags }} */}
                        </div>
                        <div className="post-author d-flex align-middle">
                            <img src={author} width="30" alt="" />
                            <span>Cyberwizdev</span>
                        </div>
                    </div>
                    <div className="post-card">
                        <div className="image-container">
                            <span className="category">Lifestyle</span>
                            <img src={nature} width="300" alt="" />
                        </div>
                        <div className="metadata mb-2 mt-1">
                            <i className="fa-solid fa-calendar"></i> 11-08-2024
                        </div>
                        <div className="post-card-content my-3">
                            <h3 className="my-2">
                                <Link href="/posts/{{ $post->id }}">
                                    Ipsum minima et illo reprehenderit quas
                                    possimus
                                </Link>
                            </h3>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsum minima et illo
                                reprehenderit quas possimus volupta repundiandae
                                cum expedita, eveniet aliquid,
                            </p>
                            {/* {{ $post->tags }} */}
                        </div>
                        <div className="post-author d-flex align-middle">
                            <img src={author} width="30" alt="" />
                            <span>Cyberwizdev</span>
                        </div>
                    </div>
                    <div className="post-card">
                        <div className="image-container">
                            <span className="category">Lifestyle</span>
                            <img src={nature} width="300" alt="" />
                        </div>
                        <div className="metadata mb-2 mt-1">
                            <i className="fa-solid fa-calendar"></i> 11-08-2024
                        </div>
                        <div className="post-card-content my-3">
                            <h3 className="my-2">
                                <Link href="/posts/{{ $post->id }}">
                                    Ipsum minima et illo reprehenderit quas
                                    possimus
                                </Link>
                            </h3>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsum minima et illo
                                reprehenderit quas possimus volupta repundiandae
                                cum expedita, eveniet aliquid,
                            </p>
                            {/* {{ $post->tags }} */}
                        </div>
                        <div className="post-author d-flex align-middle">
                            <img src={author} width="30" alt="" />
                            <span>Cyberwizdev</span>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

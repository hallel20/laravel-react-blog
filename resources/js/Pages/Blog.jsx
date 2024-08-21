import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import nature from "../../images/nature.jpg";
import author from "../../images/author.jpg";
import Pagination from "@/Components/Pagination";

export default function Blog() {
    return (
        <MainLayout>
            <Head title="Blog Posts" />
            <div className="container">
                <h1 className="text-4xl my-4">See all our Posts</h1>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="post-list-card my-5">
                            <div className="post-card-image">
                                <div className="image-container">
                                    <span className="category">Lifestyle</span>
                                    <img src={nature} alt="Nature" />
                                </div>
                            </div>
                            <div className="post-card-content my-3 md:mx-4 sm:px-1">
                                <h3 className="mb-2">
                                    <Link href="/posts/{{ $post->id }}">
                                        Ipsum minima et illo reprehenderit quas
                                        possimus
                                    </Link>
                                </h3>
                                <div className="metadata mb-2 mt-1">
                                    <i className="fa-solid fa-calendar"></i>{" "}
                                    11-08-2024
                                </div>
                                <p className="text-justify mb-3">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptates, dolores! Culpa
                                    recusandae nesciunt delectus nemo dolorem
                                    cupiditate perferendis ut pariatur eligendi
                                    earum, aspernatur incidunt consequuntur
                                    totam eius, labore sequi error qui facere
                                    animi non provident quis autem tempore
                                    repellendus. Recusandae maiores natus ut
                                    reiciendis reprehenderit atque tempora odit
                                    rerum rem saepe veritatis non aliquid
                                    placeat commodi repellendus veniam, tenetur
                                    similique unde quasi minus...
                                </p>
                                <button className="btn btn-outline-primary">
                                    Read More{" "}
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                                {/* {{ $post->tags }} */}
                                <Link href="#">
                                    <div className="post-author d-flex float-end align-baseline">
                                        <p className="text-gray-600">
                                            Hallel Ojowuro
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
                        <div className="post-list-card my-5">
                            <div className="post-card-image">
                                <div className="image-container">
                                    <span className="category">Lifestyle</span>
                                    <img src={nature} alt="Nature" />
                                </div>
                            </div>
                            <div className="post-card-content my-3 md:mx-4 sm:px-1">
                                <h3 className="mb-2">
                                    <Link href="/posts/{{ $post->id }}">
                                        Ipsum minima et illo reprehenderit quas
                                        possimus
                                    </Link>
                                </h3>
                                <div className="metadata mb-2 mt-1">
                                    <i className="fa-solid fa-calendar"></i>{" "}
                                    11-08-2024
                                </div>
                                <p className="text-justify mb-3">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptates, dolores! Culpa
                                    recusandae nesciunt delectus nemo dolorem
                                    cupiditate perferendis ut pariatur eligendi
                                    earum, aspernatur incidunt consequuntur
                                    totam eius, labore sequi error qui facere
                                    animi non provident quis autem tempore
                                    repellendus. Recusandae maiores natus ut
                                    reiciendis reprehenderit atque tempora odit
                                    rerum rem saepe veritatis non aliquid
                                    placeat commodi repellendus veniam, tenetur
                                    similique unde quasi minus...
                                </p>
                                <button className="btn btn-outline-primary">
                                    Read More{" "}
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                                {/* {{ $post->tags }} */}
                                <Link href="#">
                                    <div className="post-author d-flex float-end align-baseline">
                                        <p className="text-gray-600">
                                            Hallel Ojowuro
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
                        <div className="post-list-card my-5">
                            <div className="post-card-image">
                                <div className="image-container">
                                    <span className="category">Lifestyle</span>
                                    <img src={nature} alt="Nature" />
                                </div>
                            </div>
                            <div className="post-card-content my-3 md:mx-4 sm:px-1">
                                <h3 className="mb-2">
                                    <Link href="/posts/{{ $post->id }}">
                                        Ipsum minima et illo reprehenderit quas
                                        possimus
                                    </Link>
                                </h3>
                                <div className="metadata mb-2 mt-1">
                                    <i className="fa-solid fa-calendar"></i>{" "}
                                    11-08-2024
                                </div>
                                <p className="text-justify mb-3">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptates, dolores! Culpa
                                    recusandae nesciunt delectus nemo dolorem
                                    cupiditate perferendis ut pariatur eligendi
                                    earum, aspernatur incidunt consequuntur
                                    totam eius, labore sequi error qui facere
                                    animi non provident quis autem tempore
                                    repellendus. Recusandae maiores natus ut
                                    reiciendis reprehenderit atque tempora odit
                                    rerum rem saepe veritatis non aliquid
                                    placeat commodi repellendus veniam, tenetur
                                    similique unde quasi minus...
                                </p>
                                <button className="btn btn-outline-primary">
                                    Read More{" "}
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                                {/* {{ $post->tags }} */}
                                <Link href="#">
                                    <div className="post-author d-flex float-end align-baseline">
                                        <p className="text-gray-600">
                                            Hallel Ojowuro
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
                        <div className="post-list-card my-5">
                            <div className="post-card-image">
                                <div className="image-container">
                                    <span className="category">Lifestyle</span>
                                    <img src={nature} alt="Nature" />
                                </div>
                            </div>
                            <div className="post-card-content my-3 md:mx-4 sm:px-1">
                                <h3 className="mb-2">
                                    <Link href="/posts/{{ $post->id }}">
                                        Ipsum minima et illo reprehenderit quas
                                        possimus
                                    </Link>
                                </h3>
                                <div className="metadata mb-2 mt-1">
                                    <i className="fa-solid fa-calendar"></i>{" "}
                                    11-08-2024
                                </div>
                                <p className="text-justify mb-3">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptates, dolores! Culpa
                                    recusandae nesciunt delectus nemo dolorem
                                    cupiditate perferendis ut pariatur eligendi
                                    earum, aspernatur incidunt consequuntur
                                    totam eius, labore sequi error qui facere
                                    animi non provident quis autem tempore
                                    repellendus. Recusandae maiores natus ut
                                    reiciendis reprehenderit atque tempora odit
                                    rerum rem saepe veritatis non aliquid
                                    placeat commodi repellendus veniam, tenetur
                                    similique unde quasi minus...
                                </p>
                                <button className="btn btn-outline-primary">
                                    Read More{" "}
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                                {/* {{ $post->tags }} */}
                                <Link href="#">
                                    <div className="post-author d-flex float-end align-baseline">
                                        <p className="text-gray-600">
                                            Hallel Ojowuro
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
                        <div className="post-list-card my-5">
                            <div className="post-card-image">
                                <div className="image-container">
                                    <span className="category">Lifestyle</span>
                                    <img src={nature} alt="Nature" />
                                </div>
                            </div>
                            <div className="post-card-content my-3 md:mx-4 sm:px-1">
                                <h3 className="mb-2">
                                    <Link href="/posts/{{ $post->id }}">
                                        Ipsum minima et illo reprehenderit quas
                                        possimus
                                    </Link>
                                </h3>
                                <div className="metadata mb-2 mt-1">
                                    <i className="fa-solid fa-calendar"></i>{" "}
                                    11-08-2024
                                </div>
                                <p className="text-justify mb-3">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptates, dolores! Culpa
                                    recusandae nesciunt delectus nemo dolorem
                                    cupiditate perferendis ut pariatur eligendi
                                    earum, aspernatur incidunt consequuntur
                                    totam eius, labore sequi error qui facere
                                    animi non provident quis autem tempore
                                    repellendus. Recusandae maiores natus ut
                                    reiciendis reprehenderit atque tempora odit
                                    rerum rem saepe veritatis non aliquid
                                    placeat commodi repellendus veniam, tenetur
                                    similique unde quasi minus...
                                </p>
                                <button className="btn btn-outline-primary">
                                    Read More{" "}
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                                {/* {{ $post->tags }} */}
                                <Link href="#">
                                    <div className="post-author d-flex float-end align-baseline">
                                        <p className="text-gray-600">
                                            Hallel Ojowuro
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
                        <div className="post-list-card my-5">
                            <div className="post-card-image">
                                <div className="image-container">
                                    <span className="category">Lifestyle</span>
                                    <img src={nature} alt="Nature" />
                                </div>
                            </div>
                            <div className="post-card-content my-3 md:mx-4 sm:px-1">
                                <h3 className="mb-2">
                                    <Link href="/posts/{{ $post->id }}">
                                        Ipsum minima et illo reprehenderit quas
                                        possimus
                                    </Link>
                                </h3>
                                <div className="metadata mb-2 mt-1">
                                    <i className="fa-solid fa-calendar"></i>{" "}
                                    11-08-2024
                                </div>
                                <p className="text-justify mb-3">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptates, dolores! Culpa
                                    recusandae nesciunt delectus nemo dolorem
                                    cupiditate perferendis ut pariatur eligendi
                                    earum, aspernatur incidunt consequuntur
                                    totam eius, labore sequi error qui facere
                                    animi non provident quis autem tempore
                                    repellendus. Recusandae maiores natus ut
                                    reiciendis reprehenderit atque tempora odit
                                    rerum rem saepe veritatis non aliquid
                                    placeat commodi repellendus veniam, tenetur
                                    similique unde quasi minus...
                                </p>
                                <button className="btn btn-outline-primary">
                                    Read More{" "}
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                                {/* {{ $post->tags }} */}
                                <Link href="#">
                                    <div className="post-author d-flex float-end align-baseline">
                                        <p className="text-gray-600">
                                            Hallel Ojowuro
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

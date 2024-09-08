import { Link, useForm } from "@inertiajs/react";
import InputError from "./InputError";
import { useState } from "react";

const CommentSection = ({ postId, user, comments }) => {
    comments = Object.values(comments);
    console.log(comments);

    const { post, processing, data, setData, reset, errors } = useForm({
        comment: "",
        post_id: postId,
    });
    const [notice, setNotice] = useState(false);
    return (
        <>
            <h3 className="text-2xl font-bold mt-7">Comments</h3>
            <hr />
            <br />
            {user ? (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        post(route("comments.store"), {
                            onSuccess: () => {
                                reset();
                                setNotice(true);
                                setTimeout(() => {
                                    setNotice(false);
                                }, 3000);
                            },
                        });
                    }}
                >
                    <div className="form-group md:d-flex">
                        <textarea
                            className="form-control mb-2"
                            rows="4"
                            placeholder="Write your Comment..."
                            value={data.comment}
                            required
                            onChange={(e) => setData("comment", e.target.value)}
                        ></textarea>
                        {errors ? (
                            <InputError
                                message={errors.comment}
                                className="mt-2 bg-red-600 p-1 rounded-sm"
                            />
                        ) : null}
                        {notice ? (
                            <p className="bg-green-500 my-2 mx-1 text-center text-white px-4 py-2 rounded-md">
                                Comment Successfully Added!!!
                            </p>
                        ) : null}
                        <div className="align-bottom text-end">
                            <button
                                type="submit"
                                className="btn btn-success"
                                disabled={processing}
                            >
                                Submit{" "}
                                {processing ? (
                                    <span className="spinner-border spinner-border-sm"></span>
                                ) : null}
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <p className="text-center bg-sky-500 py-2  text-white">
                    You need to{" "}
                    <Link className="underline" href={route("login")}>
                        login
                    </Link>{" "}
                    to add comments!
                </p>
            )}
            <div className="comments my-4">
                {comments ? (
                    <div>
                        {comments.map((comment) => {
                            <div className="comment my-3">
                                <h5 className="border-bottom">
                                    {/* {comment.value} */}
                                </h5>
                                <span className="text-gray-400">
                                    17-08-2024 @2:16AM
                                </span>
                                <p className="text-gray-600 italic">
                                    {Object.values(comment)[0].content}
                                </p>
                            </div>;
                        })}
                    </div>
                ) : (
                    <div>There are no comments yet!</div>
                )}
                {/* <div className="comment my-3">
                    <h5 className="border-bottom">Cyberwizdev</h5>
                    <span className="text-gray-400">17-08-2024 @2:16AM</span>
                    <p className="text-gray-600 italic">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Libero rem fugiat unde numquam exercitationem
                        harum amet nam optio. Officia, laborum!
                    </p>
                </div>
                <div className="comment my-3">
                    <h5 className="border-bottom">Cyberwizdev</h5>
                    <span className="text-gray-400">17-08-2024 @2:16AM</span>
                    <p className="text-gray-600 italic">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. At, repellendus cupiditate maiores ipsum tempora
                        dolores laboriosam facere voluptate voluptatum assumenda
                        eius est minima aliquam. Architecto adipisci excepturi
                        dolore? Quisquam quasi provident quidem deserunt
                        voluptate ipsa illo suscipit tempore error natus.
                    </p>
                </div>
                <div className="comment my-3">
                    <h5 className="border-bottom">Cyberwizdev</h5>
                    <span className="text-gray-400">17-08-2024 @2:16AM</span>
                    <p className="text-gray-600 italic">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere doloribus hic, a perspiciatis impedit
                        reprehenderit, dignissimos fugiat vero fugit distinctio
                        atque perferendis laudantium beatae iure non nam
                        expedita quia nostrum veniam aliquam placeat! In
                        sapiente nam ducimus magni ex consequuntur enim illo
                        porro. Fugiat dignissimos nemo voluptas vitae eum culpa.
                    </p>
                </div> */}
            </div>
        </>
    );
};

export default CommentSection;

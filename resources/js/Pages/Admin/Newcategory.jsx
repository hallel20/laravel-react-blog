import InputError from "@/Components/InputError";
import Loading from "@/Components/Loading";
import { useForm } from "@inertiajs/react";

export default function NewCategory() {
    const { data, setData, post, processing, redirect, errors } = useForm({
        name: "",
    });
    // console.log(errors);

    return (
        <div className="modal-dialog relative">
            {processing && <Loading />}
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="text-3xl">Add Category</h2>
                </div>
                <div className="modal-body">
                    {/* Edit Post Form */}
                    <form
                        className="post-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            post(route("categories.store"));
                        }}
                    >
                        <div className="relative p-3">
                            <label htmlFor="name" className="text-1xl mt-4">
                                Category Name
                            </label>
                            <input
                                type="text"
                                className="form-control my-3"
                                name="name"
                                value={data.name}
                                id="name"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2 bg-red-600 p-1 rounded-sm"
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
        </div>
    );
}

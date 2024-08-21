import SingleLayout from "@/Layouts/SingleLayout";

export default function Contact() {
    return (
        <SingleLayout>
            <h2 className="text-4xl font-bold my-4">Contact Us</h2>
            <hr className="text-gray-400" />
            <h3 className="text-2xl text-center mt-4">Get in touch with us</h3>
            <form
                className="w-8/12 mx-auto my-4 space-y-5"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <div className="form-group">
                    <label htmlFor="name" className="text-xl font-bold">
                        Your Name:
                    </label>
                    <input
                        type="text"
                        className="form-control rounded-lg"
                        id="name"
                        name="name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="text-xl font-bold">
                        Your Email:
                    </label>
                    <input
                        type="email"
                        className="form-control rounded-lg"
                        id="email"
                        name="email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="text-xl font-bold">
                        Your Message:
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        className="rounded-lg form-control"
                    ></textarea>
                </div>
                <div className="form-group text-end">
                    <button type="submit" className="btn btn-lg btn-success">
                        Send
                    </button>
                </div>
            </form>
        </SingleLayout>
    );
}

import image from "../../images/bg.jpg";
import author from "../../images/author.jpg";
import { Head } from "@inertiajs/react";
import SingleLayout from "@/Layouts/SingleLayout";

export default function SinglePost() {
    return (
        <SingleLayout>
            <Head title="Single Post Template" />
            <h1 className="md:text-4xl text-2xl font-bold mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <img src={image} alt="Post-Image" className="my-4 rounded-lg" />
            <div className="text-gray-700 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                maxime minima minus corporis dolorum rerum cumque temporibus
                praesentium explicabo doloremque ratione similique et commodi
                totam, enim harum sapiente eaque laudantium esse cum quibusdam
                voluptate, aspernatur doloribus quos? Sed voluptatum, quis
                architecto quos natus corporis fugit consequuntur ipsum eligendi
                facilis, similique, distinctio aut quisquam veniam consequatur
                expedita voluptatem. Odio rerum ad vitae beatae accusamus eos
                enim facilis consequuntur esse saepe consectetur molestiae
                voluptatem, et blanditiis unde illo commodi reprehenderit!
                Quaerat officiis iusto, reprehenderit molestiae odit ullam optio
                aut eum corporis consectetur modi nulla consequatur error a
                aperiam natus laudantium, aliquam fuga fugiat? Porro accusamus
                iure excepturi cum placeat libero aperiam ex asperiores
                reprehenderit quae similique, nostrum, soluta ut sapiente ab est
                sint quisquam dicta earum fugiat at? Eos tempore omnis ipsam!
                Autem voluptatibus, quisquam, accusantium culpa maxime quae
                facere quod consectetur mollitia repudiandae accusamus dolorem
                iure et esse fugiat dolores aspernatur, soluta alias ad
                laudantium eveniet qui exercitationem amet! Similique pariatur
                labore sequi placeat obcaecati vel, facilis amet soluta.
                Perferendis, tenetur explicabo! Ducimus beatae voluptate at
                nulla quasi illum assumenda explicabo consequatur iste, aliquid
                deleniti veniam laudantium possimus animi non cum delectus porro
                ipsa officiis ab a. Enim provident aspernatur nam?
            </div>
            <div className="author justify-end d-flex pt-2">
                <p className="font-bold text-gray-500">&#8212;Hallel Ojowuro</p>
                <div className="rounded-full border-solid shadow-lg border-white">
                    <img
                        src={author}
                        alt="Author"
                        width="30"
                        className="rounded-full"
                    />
                </div>
            </div>
            <br />
            <h3 className="text-2xl font-bold mt-7">Comments</h3>
            <hr />
            <br />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <div className="form-group md:d-flex">
                    <textarea
                        className="form-control mb-2"
                        rows="4"
                        placeholder="Write your Comment..."
                    ></textarea>
                    <div className="align-bottom text-end">
                        <button type="submit" className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <div className="comment my-3s my-4">
                <div className="comment my-3">
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
                </div>
            </div>
        </SingleLayout>
    );
}

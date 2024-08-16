import GuestLayout from "@/Layouts/GuestLayout";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <GuestLayout>
            <Head title="Welcome" />
            <div className="page-cover">Welcome to My Blog</div>
        </GuestLayout>
    );
}

import MainLayout from "./MainLayout";

export default function SingleLayout({ children }) {
    return (
        <MainLayout>
            <div className="lg:w-8/12 md:w-10/12 mx-auto">
                <div className="px-3">{children}</div>
            </div>
        </MainLayout>
    );
}

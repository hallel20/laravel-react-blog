export default function Loading() {
    return (
        <div className="loading-spinner">
            <div
                className="spinner-border"
                style={{ width: "5rem", height: "5rem" }}
                role="status"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

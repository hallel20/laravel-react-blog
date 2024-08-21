export default function Pagination() {
    return (
        <div className="flex-row gap-4 text-center">
            <button className="btn btn-secondary">
                <i className="fa fa-chevron-left"></i>
            </button>
            &nbsp;
            <button className="btn btn-secondary">1</button>&nbsp;
            <button className="btn btn-secondary">2</button>&nbsp;
            <button className="btn btn-secondary">3</button>&nbsp;
            <button className="btn btn-secondary">4</button>&nbsp;
            <button className="btn btn-secondary">
                <i className="fa fa-chevron-right"></i>
            </button>
            &nbsp;
        </div>
    );
}

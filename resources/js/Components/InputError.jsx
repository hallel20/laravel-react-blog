export default function InputError({ message, className = "", ...props }) {
    return message ? (
        <p
            {...props}
            className={
                "my-3 bg-red-600 p-1 text-white rounded-sm text-sm " + className
            }
        >
            {message}
        </p>
    ) : null;
}

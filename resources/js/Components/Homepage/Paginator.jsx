import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="flex justify-center mt-4 space-x-2">
            {prev ? (
                <Link href={prev} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200">
                    « Previous
                </Link>
            ) : (
                <span className="px-3 py-1 bg-gray-200 text-gray-400 rounded-md">« Previous</span>
            )}
            <span className="px-3 py-1 bg-blue-500 text-white rounded-md">
                {current}
            </span>
            {next ? (
                <Link href={next} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200">
                    Next »
                </Link>
            ) : (
                <span className="px-3 py-1 bg-gray-200 text-gray-400 rounded-md">Next »</span>
            )}
        </div>
    );
};

export default Paginator;

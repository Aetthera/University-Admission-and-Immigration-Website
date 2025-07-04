export default function ReviewCard({ name, image, review, stars = 5 }) {
    const renderStars = () =>
        [...Array(stars)].map((_, index) => (
            <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 text-yellow-400"
            >
                <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                    clipRule="evenodd"
                />
            </svg>
        ));

    return (
        <div className="bg-white p-9 rounded-[3vh] shadow-sm border border-gray-240 h-[35vh] w-[35vh] flex flex-col gap-5">
            <div className="flex items-center space-x-4">
                <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                    <p className="text-sm font-semibold text-gray-800">{name}</p>
                    <p className="text-xs text-gray-500">Google Review</p>
                </div>
            </div>

            <div className="flex">{renderStars()}</div>

            <p className="text-gray-700 text-[18px]">{review}</p>
            
        </div>
    );
}

import JohnImg from '../assets/john.png';
import JessicaImg from '../assets/jessica.png';

export default function CustomerReview() {

    {/* Profiles for the top row of reviews */}
    const reviewsTop = [
        {
            id: 1,
            name: "Jessica Johnson",
            image: JessicaImg
        },
        {
            id: 2,
            name: "John Doe",
            image: JohnImg
        }
    ]

    {/* Rendering stars function */}
    const renderStars = () => 
        [...Array(5)].map((_, index) => (
            <svg 
            key={index}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="size-5">
            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
          </svg>
        ));



    return (
      <section className="flex flex-col items-center justify-center min-h-[85vh] bg-white relative overflow-hidden px-4 py-16 space-y-12">
        
        {/* Top row: 2 cards + heading */}
        <div className="flex justify-between items-start max-w-7xl w-full gap-6 ml-[-190px]">
          
          {/* Grid with 2 cards */}
          <div className="grid grid-cols-2 gap-6">
            {reviewsTop.map((review) => (
              <div
                key={review}
                className="bg-white p-6 rounded-[3vh] shadow-sm border border-gray-240 h-[35vh] w-[35vh]">
                <p className="text-gray-700 text-base mb-4 text-[22px] pb-2">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  efficitur arcu et risus fringilla, id malesuada elit vehicula."
                </p>

                {/* The stars rating system */}
                <div className="flex space-x-1 mb-4 text-yellow-400">
                    {renderStars()}
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300">
                    <img 
                        src={review.image}
                        alt={review.name}
                        className='w-10 h-10 rounded-full object-cover'    
                    />  
                  {/* Customer Name */}
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{review.name}</p>
                    <p className="text-xs text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
  
          {/* Heading on the right */}
          <div className="w-[350px] text-right pt-[40px]">
            <h1 className="text-black text-[65px] font-semibold leading-snug text-wrap font-montserrat">
              What our Clients Have Said
            </h1>
          </div>
        </div>
  
        {/* Bottom row: 4 cards */}
        <div className="grid grid-cols-4 gap-[240px] max-w-7xl w-full mt-16 ml-[-190px]">
          {[1, 2, 3, 4].map((review) => (
            <div
              key={review}
              className="bg-white p-6 rounded-[3vh] shadow-sm border border-gray-240 h-[35vh] w-[35vh]"
            >
              <p className="text-gray-700 text-base mb-4 text-[22px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur arcu et risus fringilla, id malesuada elit vehicula."
              </p>
                
                {/* Star Reviews */}
              <div className="flex space-x-1 mb-4 text-yellow-400">
                {[...Array(5)].map ((_, index ) => 
                    <svg 
                    key={index}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className="size-5">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                  </svg>

                )}
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">John Doe</p>
                  <p className="text-xs text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
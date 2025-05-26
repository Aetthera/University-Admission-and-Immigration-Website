import planeimg from '../assets/Layer_1.png';

export default function ContactUs() {
    return (
        <section className="relative flex flex-col items-center min-h-[85vh] bg-gray-100 overflow-hidden px-10 py-20">

            {/* Title */}
            <div className="text-center font-semibold font-montserrat mb-16">
                <h1 className="text-black text-6xl">Get In Touch</h1>
            </div>

            {/* Main Content: Two Columns with Wider Space */}
            <div className="flex justify-center gap-28 w-full max-w-7xl">

                {/* Contact Info Column */}
                <div className="flex flex-col space-y-10 text-black pt-10 w-1/2 max-w-md">
                    <p className="font-semibold text-[29px]">Contact Information</p>

                    {/* Email */}
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5M19.5 4.5H4.5M3 6.75v10.5m19.5 0H1.5M3 6.75l9 5.25 9-5.25" />
                        </svg>
                        <p className="font-thin text-[15px]">Contact@mail.com</p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <p className="font-thin text-[15px]">+1 (555) 123-456</p>
                    </div>

                    {/* Address */}
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p className="font-thin text-[15px]">123 Business Street, Suite 100, City, State 12345</p>
                    </div>
                </div>

                {/* Contact Form Column */}
                <div className="flex flex-col space-y-10 text-black pt-10 w-1/2 max-w-md">

                    {/* Name */}
                    <div>
                        <p className="font-thin pb-2">Name</p>
                        <input
                            type="text"
                            className="bg-gray-100 border-gray-300 border-[2px] rounded-md h-[37px] w-full px-3"
                            placeholder="Your Name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <p className="font-thin pb-2">Email</p>
                        <input
                            type="email"
                            className="bg-gray-100 border-gray-300 border-[2px] rounded-md h-[37px] w-full px-3"
                            placeholder="Your Email"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <p className="font-thin pb-2">Message</p>
                        <textarea
                            className="bg-gray-100 border-gray-300 border-[2px] rounded-md h-[150px] w-full p-3 resize-none"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                </div>
            </div>

            {/* Plane Image at Bottom Left */}
    <img
        src={planeimg}
        alt="Paper plane illustration"
        className="absolute bottom-0 left-[-40px] w-[500px] h-auto"
    />
        </section>
    );
}
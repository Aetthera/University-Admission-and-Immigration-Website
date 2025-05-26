export default function ContactUs() {
    return (
        <section className="flex flex-col items-center min-h-[85vh] bg-gray-100 overflow-hidden px-10 py-20">

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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5..." />
                        </svg>
                        <p className="font-thin text-[15px]">Contact@mail.com</p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284..." />
                        </svg>
                        <p className="font-thin text-[15px]">+1 (555) 123-456</p>
                    </div>

                    {/* Address */}
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3..." />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0..." />
                        </svg>
                        <p className="font-thin text-[15px]">123 Business Street, Suite 100, City, State 12345</p>
                    </div>
                </div>

                {/* Contact Form Column */}
                <div className="flex flex-col space-y-10 text-black pt-10 w-1/2 max-w-md">

                    {/* Name */}
                    <div>
                        <p className="font-thin pb-2">Name</p>
                        <input className="bg-gray-100 border-gray-300 border-[2px] rounded-md h-[37px] w-full px-3" placeholder="Your Name" />
                    </div>

                    {/* Email */}
                    <div>
                        <p className="font-thin pb-2">Email</p>
                        <input className="bg-gray-100 border-gray-300 border-[2px] rounded-md h-[37px] w-full px-3" placeholder="Your Email" />
                    </div>

                    {/* Message */}
                    <div>
                        <p className="font-thin pb-2">Message</p>
                        <textarea className="bg-gray-100 border-gray-300 border-[2px] rounded-md h-[150px] w-full p-3 resize-none" placeholder="Your Message"></textarea>
                    </div>
                </div>
            </div>
        </section>
    );
}
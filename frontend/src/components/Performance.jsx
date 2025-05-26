import Backdrop from '../assets/Backdrop.png'

export default function Performance() {
    return (

    <section className="flex items-center justify-center min-h-[85vh] bg-white-20 relative overflow-hidden bg-white">
        
    
   {/* Background image positioned absolutely */}
   <div
    className="absolute inset-0 z-0 bg-no-repeat bg-size-[auto_260px] bg-center opacity-[500] shadow-lg border-gray-240 shadow-lg/30"
    style={{ backgroundImage: `url(${Backdrop})` }}
        />
        
        {/* Header Text positioned top-right */}
      <div className="absolute top-40 left-[35vh] z-10 text-left">
        <h1 className="text-black font-bold max-w-[390px] size-4xl text-[53px] font-montserrat">
          Glance At Our Performance
        </h1>
      </div>



        {/* The circles */}
      <div className='flex space-x-8 top-20 pt-60'>

        {/* Circle 1 */}
        <div className='w-[215px] h-[215px] rounded-full bg-white border-[2px] border-[#256DB2] text-center '>

            {/* Client Satisfaction */}

            <h1 className='relative text-black pt-[60px] font-montserrat font-semibold'>
                1936
            </h1>

            <p className='relative text-black pt-[6px] text-[14px]'> 
                Client Satisfaction
            </p>

        </div>

        {/* Circle 2 */}
        <div className='w-[215px] h-[215px] rounded-full bg-white border-[2px] border-[#256DB2] text-center'>

            {/* Ongoing Cases */}
            <h1 className='relative text-black pt-[60px] font-montserrat font-semibold'>
                278
            </h1>

            <p className='relative text-black pt-[6px] text-[14px]'> 
                Ongoing Cases
            </p>


        </div>

        {/* Circle 3 */}
        <div className='relative w-[215px] h-[215px] rounded-full bg-[#256DB2] border-[2px] border-[#256DB2] -mt-[150px] text-center '>

            {/* Succeeded */}
            <h1 className='relative text-white pt-[60px] font-montserrat font-semibold'>
                1300
            </h1>

            <p className='relative text-white pt-[6px] text-[14px]'> 
                Succeeded
            </p>


        </div>

        {/* Circle 4 */}
        <div className='w-[215px] h-[215px] rounded-full bg-white border-[2px] border-[#256DB2] text-center justify-center items-center'>
            
            {/* Immigration Consultation to Canada */}
            <h1 className='relative text-black pt-[60px] font-montserrat font-semibold'>
                8678
            </h1>

            <p className='relative text-black pt-[6px] max-w-[180px] pl-[30px] text-[14px] text-center'> 
                Immigration Consulting to Canada
            </p>

        </div>
        
      </div>

    </section>
    )
};
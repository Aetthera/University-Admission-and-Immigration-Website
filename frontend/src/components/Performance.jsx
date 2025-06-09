// import Backdrop from '../assets/Backdrop.png'

// export default function Performance() {
//     return (

//     <section className="flex items-center justify-center min-h-[85vh] bg-white-20 relative overflow-hidden bg-white">


//    {/* Background image positioned absolutely */}
//    <div
//     className="absolute inset-0 z-0 bg-no-repeat bg-size-[auto_260px] bg-center opacity-[500] shadow-lg border-gray-240 shadow-lg/30"
//     style={{ backgroundImage: `url(${Backdrop})` }}
//         />

//         {/* Header Text positioned top-right */}
//       <div className="absolute top-40 left-[35vh] z-10 text-left">
//         <h1 className="text-black font-bold max-w-[390px] size-4xl text-[53px] font-montserrat">
//           Glance At Our Performance
//         </h1>
//       </div>



//         {/* The circles */}
//       <div className='flex space-x-8 top-20 pt-60'>

//         {/* Circle 1 */}
//         <div className='w-[215px] h-[215px] rounded-full bg-white border-[2px] border-[#256DB2] text-center '>

//             {/* Client Satisfaction */}

//             <h1 className='relative text-black pt-[60px] font-montserrat font-semibold'>
//                 1936
//             </h1>

//             <p className='relative text-black pt-[6px] text-[14px]'> 
//                 Client Satisfaction
//             </p>

//         </div>

//         {/* Circle 2 */}
//         <div className='w-[215px] h-[215px] rounded-full bg-white border-[2px] border-[#256DB2] text-center'>

//             {/* Ongoing Cases */}
//             <h1 className='relative text-black pt-[60px] font-montserrat font-semibold'>
//                 278
//             </h1>

//             <p className='relative text-black pt-[6px] text-[14px]'> 
//                 Ongoing Cases
//             </p>


//         </div>

//         {/* Circle 3 */}
//         <div className='relative w-[215px] h-[215px] rounded-full bg-[#256DB2] border-[2px] border-[#256DB2] -mt-[150px] text-center '>

//             {/* Succeeded */}
//             <h1 className='relative text-white pt-[60px] font-montserrat font-semibold'>
//                 1300
//             </h1>

//             <p className='relative text-white pt-[6px] text-[14px]'> 
//                 Succeeded
//             </p>


//         </div>

//         {/* Circle 4 */}
//         <div className='w-[215px] h-[215px] rounded-full bg-white border-[2px] border-[#256DB2] text-center justify-center items-center'>

//             {/* Immigration Consultation to Canada */}
//             <h1 className='relative text-black pt-[60px] font-montserrat font-semibold'>
//                 8678
//             </h1>

//             <p className='relative text-black pt-[6px] max-w-[180px] pl-[30px] text-[14px] text-center'> 
//                 Immigration Consulting to Canada
//             </p>

//         </div>

//       </div>

//     </section>
//     )
// };

// import SectionWrapper from './SectionWrapper';
// import useCountUp from '../hooks/useCountUp';


// export default function Performance() {
//     return (
//         <SectionWrapper className="h-[100vh] flex justify-center items-center py-16 ">
//             <div className="relative w-[140vh] h-[70vh] overflow-hidden">

//                 {/* SVG Background Shape */}
//                 <svg
//                     viewBox="0 0 1155.68 566.13"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="absolute top-0 left-0 w-full h-full"
//                     preserveAspectRatio="none"
//                 >
//                     <path
//                         fill="#f2f3f5"
//                         opacity="0.51"
//                         d="M1058.82,562.23H95.31c-53.49,0-96.86-43.36-96.86-96.86v-157.69
//                             c0-16.46,8.7-31.7,22.88-40.07L456.41,10.87C468.47,3.75,482.22,0,496.22,0h562.6
//                             c53.49,0,96.86,43.36,96.86,96.86v368.52c0,53.49-43.36,96.86-96.86,96.86Z"
//                     />
//                 </svg>

//                 {/* Your content over the shape */}
//                 <div className="relative z-10 flex flex-col justify-center items-center h-full">

//                     <div className="w-full h-[40%] pl-10 flex justify-start items-center">
//                         <h1 className="text-6xl font-bold text-left leading-tight px-8 pt-5">
//                             Glance at Our<br />
//                             Performance
//                         </h1>
//                     </div>

//                     <div className="w-full h-[60%] flex flex-row justify-center items-center gap-[50px] pb-10">
//                         <div className="w-[230px] h-[230px] rounded-full border border-[#256DB2] flex flex-col justify-center items-center">
//                             <h1 className="font-semibold">1936</h1>
//                             <p>Client Satisfaction</p>
//                         </div>
//                         <div className="w-[230px] h-[230px] rounded-full border border-[#256DB2] flex flex-col justify-center items-center">
//                             <h1 className="font-semibold">278</h1>
//                             <p>Ongoing Cases</p>
//                         </div>
//                         <div className="w-[230px] h-[230px] rounded-full border border-[#256DB2] bg-[#256DB2] flex flex-col justify-center items-center text-white">
//                             <h1 className='font-semibold'>1936</h1>
//                             <p className=''>Succeeded</p>
//                         </div>
//                         <div className="w-[230px] h-[230px] rounded-full border border-[#256DB2] flex flex-col justify-center items-center text-center">
//                             <h1 className="font-semibold">1936</h1>
//                             <p>Immigration Consulting<br/>to Canada</p>
//                         </div>
//                     </div>


//                 </div>

//             </div>
//         </SectionWrapper>
//     );
// }


import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import useCountUp from '../hooks/useCountUp';

export default function Performance() {
    const { ref, inView } = useInView({ triggerOnce: false });
    const [triggerCounts, setTriggerCounts] = useState(false);

    useEffect(() => {
        if (inView) {
            setTriggerCounts(false); // reset first
            setTimeout(() => setTriggerCounts(true), 10); // re-trigger count
        }
    }, [inView]);

    const count1 = useCountUp(triggerCounts ? 1936 : 0, 2000);
    const count2 = useCountUp(triggerCounts ? 278 : 0, 1500);
    const count3 = useCountUp(triggerCounts ? 1300 : 0, 1500);
    const count4 = useCountUp(triggerCounts ? 8678 : 0, 2000);

    return (
        <SectionWrapper className="h-[100vh] flex justify-center items-center py-16 ">
            <div className="relative w-[140vh] h-[70vh] overflow-hidden" ref={ref}>

                {/* SVG Background Shape */}
                <svg
                    viewBox="0 0 1155.68 566.13"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 w-full h-full"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#f2f3f5"
                        opacity="0.51"
                        d="M1058.82,562.23H95.31c-53.49,0-96.86-43.36-96.86-96.86v-157.69
                c0-16.46,8.7-31.7,22.88-40.07L456.41,10.87C468.47,3.75,482.22,0,496.22,0h562.6
                c53.49,0,96.86,43.36,96.86,96.86v368.52c0,53.49-43.36,96.86-96.86,96.86Z"
                    />
                </svg>

                {/* Your content over the shape */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full">

                    <div className="w-full h-[40%] pl-10 flex justify-start items-center">
                        <h1 className="text-6xl font-bold text-left leading-tight px-8 pt-5">
                            Glance at Our<br />
                            Performance
                        </h1>
                    </div>

                    <div className="w-full h-[60%] flex flex-row justify-center items-center gap-[50px] pb-10">
                        <div className="w-[230px] h-[230px] rounded-full border border-[#256DB2] flex flex-col justify-center items-center">
                            <h1 className="font-semibold">{count1}</h1>
                            <p>Client Satisfaction</p>
                        </div>

                        <div className="w-[230px] h-[230px] rounded-full border border-[#256DB2] flex flex-col justify-center items-center">
                            <h1 className="font-semibold">{count2}</h1>
                            <p>Ongoing Cases</p>
                        </div>

                        <motion.div
                            initial={{ y: 0, opacity: 0 }}
                            animate={inView ? { y: -120, opacity: 1 } : {}}
                            transition={{ duration: 1 }}
                            className="w-[230px] h-[230px] rounded-full border border-[#256DB2] bg-[#256DB2] flex flex-col justify-center items-center text-white"
                        >
                            <h1 className="font-semibold">{count3}</h1>
                            <p>Succeeded</p>
                        </motion.div>

                        <div className="w-[230px] h-[230px] rounded-full border border-[#256DB2] flex flex-col justify-center items-center text-center">
                            <h1 className="font-semibold">{count4}</h1>
                            <p>Immigration Consulting<br />to Canada</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}


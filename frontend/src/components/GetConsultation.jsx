import SectionWrapper from './SectionWrapper';
import Background from '../assets/consultation-background.png';
import SmallArrowButton from './SmallArrowButton';
import LongArrowButton from './LongArrowButton';
import ConsultationImage from '../assets/consultation-immigration.jpg';

export default function GetConsultation() {
    return (
        <section className="relative h-[100vh] w-full overflow-hidden">

            {/* Background image on the right (behind) */}
            <div
                className="absolute top-[1px] right-0 h-[99.99%] w-[100%] bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${ConsultationImage})` }}
            ></div>

            {/* Foreground content on the left (on top) */}
            <div
                className="absolute top-0 left-0 h-full w-full z-10 bg-contain bg-left bg-no-repeat text-black"
                style={{ backgroundImage: `url(${Background})` }}
            >
                <SectionWrapper className="flex flex-col justify-start items-start gap-10 py-[100px] !pl-[75px]">
                    <h1 className="font-bold text-5xl">Lorem Ipsum</h1>

                    <p className="max-w-[400px] text-base text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis ducimus vitae unde nisi eveniet fugit dolorem, est ea facere, doloribus minus labore repudiandae! Possimus magni aperiam sed odit magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis ducimus vitae unde nisi eveniet fugit dolorem, est ea facere, doloribus minus labore repudiandae! Possimus magni aperiam sed odit magnam.<br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis ducimus vitae unde nisi eveniet fugit dolorem, est ea facere, doloribus minus labore repudiandae! Possimus magni aperiam sed odit magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis ducimus vitae unde nisi eveniet fugit dolorem, est ea facere, doloribus minus labore repudiandae! Possimus magni aperiam sed odit magnam.
                    </p>

                    <div className="flex flex-col justify-start items-start gap-2">
                        <SmallArrowButton />
                        <LongArrowButton />
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}

import Person from '../assets/person.png';
import Vector1 from '../assets/lineAroundPerson.png';
import SectionWrapper from './SectionWrapper';
import Background from '../assets/consultation-background.png';
import SmallArrowButton from './SmallArrowButton';
import LongArrowButton from './LongArrowButton';

export default function GetConsultation() {
    return (
        <section className="h-[100vh] w-full flex flex-row justify-between">

            {/* Background which goes on the left */}
            <div
                className="bg-contain bg-left bg-no-repeat h-full w-full z-0 "
                style={{ backgroundImage: `url(${Background})` }}
            >

                <SectionWrapper className="flex flex-col justify-start items-start gap-10 py-[100px] !pl-[75px]">

                    <h1 className="font-bold">Lorem Ipsum</h1>
                    <p className="max-w-[400px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis ducimus vitae unde nisi eveniet fugit dolorem, est ea facere, doloribus minus labore repudiandae! Possimus magni aperiam sed odit magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis ducimus vitae unde nisi eveniet fugit dolorem, est ea facere, doloribus minus labore repudiandae! Possimus magni aperiam sed odit magnam.<br/><br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis ducimus vitae unde nisi eveniet fugit dolorem, est ea facere, doloribus minus labore repudiandae! Possimus magni aperiam sed odit magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis ducimus vitae unde nisi eveniet fugit dolorem, est ea facere, doloribus minus labore repudiandae! Possimus magni aperiam sed odit magnam.
                    </p>

                    <div className="flex flex-col justify-start items-start gap-2">
                        <SmallArrowButton/>
                        <LongArrowButton/>
                        
                    </div>
                    

                </SectionWrapper>

            </div>


            {/* Image on the right, behind background */}
            <div className="z-10">

            </div>

        </section>
    );
}

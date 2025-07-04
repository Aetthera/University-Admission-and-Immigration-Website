import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import ReviewCard from './ReviewCard';
import { topRowReviews, bottomRowReviews } from '../data/reviews';

export default function CustomerReview() {
    const { ref, inView } = useInView({
        threshold: 0.05, // triggers if even a tiny bit is visible
    });

    return (
        <div className="w-full bg-white">
            <SectionWrapper id="h-[100vh] customer-reviews">
                <section
                    ref={ref}
                    className="h-[100vh] py-16 px-12 bg-white overflow-hidden flex flex-col justify-center gap-3 text-black"
                >
                    {/* Top Row */}
                    <div className="flex justify-between items-center">
                        <div className="overflow-hidden">
                            <div
                                className={`flex gap-3 w-max ${inView ? 'animate-scroll-x' : ''
                                    } hover:[animation-play-state:paused] px-4`}
                            >
                                {[...topRowReviews, ...topRowReviews].map((review, index) => (
                                    <ReviewCard key={`top-${review.id}-${index}`} {...review} />
                                ))}
                            </div>
                        </div>

                        <div className="min-w-[500px] text-right pl-10">
                            <h1 className="text-6xl font-bold">What Our<br />Clients Have<br />Said</h1>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="overflow-hidden">
                        <div
                            className={`flex gap-3 w-max ${inView ? 'animate-scroll-x' : ''
                                } hover:[animation-play-state:paused] px-4`}
                        >
                            {[...bottomRowReviews, ...bottomRowReviews].map((review, index) => (
                                <ReviewCard key={`bottom-${review.id}-${index}`} {...review} />
                            ))}
                        </div>
                    </div>
                </section>
            </SectionWrapper>
        </div>
    );
}

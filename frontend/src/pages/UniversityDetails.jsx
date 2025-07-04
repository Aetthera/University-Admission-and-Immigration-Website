import { UilBookOpen } from '@iconscout/react-unicons';
import { UilUsersAlt } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilExternalLinkAlt } from '@iconscout/react-unicons'


import {useParams} from 'react-router-dom';


//Import Json files
import canada from '../data/canadian_universities.json';
import us from '../data/us_universities.json';
import denmark from '../data/denmark_universities.json';
import finland from '../data/finland_universities.json';
import germany from '../data/german_universities.json';
import italy from '../data/italian_universities.json';
import norway from '../data/norwegian_universities.json';

const countryDataMap = {
    canada,
    us,
    denmark,
    finland,
    germany,
    italy,
    norway
}


export default function UniversityDetails() {
    

    const {country, name} = useParams();
    const data = countryDataMap[country?.toLowerCase()];
    const university = data?.find(
        (uni) => uni.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
    );

    if(!university){
        return <div className="text-red-600 text-center mt-10">University not found.</div>;
    }

    const normalizedUniversity = {
        name: university.name,
        city: university.city || 'N/A',
        region:
            university.province ||
            university.state ||
            university['state-province'] ||
            '', // fallback
        country: university.country || '',
        founded: university.founded || university.year_founded || 'N/A',
        students: university.students || university.number_of_students || 'N/A',
        description: university.description || 'No description available.',
        website: university.website || '#'
    };
  
    return (

    <section className="max-w-5xl w-full rounded-[10px] overflow-hidden shadow-lg bg-white mt-[150px] mx-auto">

        {/* Red Top */}
        <div className="bg-[#991b1b] w-full py-8 px-12">
            <h1 className="text-white text-4xl font-bold">{normalizedUniversity.name}</h1>

            <div className="flex items-center gap-2 mt-2">
                <UilLocationPoint className="h-6" color="white" />
                <p className="text-white font-semibold">
                {normalizedUniversity.city}, {normalizedUniversity.province}, {normalizedUniversity.country}
                </p>
            </div>
        </div>

        {/* University Info */}
        <div className="flex flex-wrap items-center justify-center bg-[#f9fafb] w-full py-8 px-22 gap-24">

        {/* Founded */}
        <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-[#fee2e1] flex items-center justify-center">
                <UilBookOpen className="h-7 w-7" color="#991b1b" />
            </div>

            <div className="flex flex-col">
                <p className="text-gray-500">Founded</p>
                <h2 className="text-black font-bold text-[20px]">{normalizedUniversity.founded}</h2>
            </div>
        </div>

        {/* Students */}
            <div className="flex items-center gap-3">
      <div className="w-14 h-14 rounded-full bg-[#fee2e1] flex items-center justify-center">
        <UilUsersAlt className="h-7 w-7" color="#991b1b" />
      </div>
      <div className="flex flex-col">
        <p className="text-gray-500">Student Population</p>
        <h2 className="text-black font-bold text-[20px]">{normalizedUniversity.students}</h2>
      </div>
            </div>

        </div>

        {/* About School */}
        <div className='bg-white w-full max-h-[500px] overflow-y-auto py-8 px-12'>
            
            {/* About University Name */}
            <h1 className='text-black text-[25px] font-bold mb-6'> About {normalizedUniversity.name}</h1>


            {/* University Description */}
            <h2 className='text-black leading-relaxed'>{normalizedUniversity.description}</h2>


            {/* Website Button */}
            <a
                href={normalizedUniversity.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-[#991b1b] rounded-lg text-white"
                style={{ transition: 'none' }}
            >
            <UilExternalLinkAlt className="w-5 h-5" color="white" />
            <span className="whitespace-nowrap" >Visit Website</span>
            </a>
        </div>
    </section>

    );
  }
import {Link} from 'react-router-dom'

function UniversityCard({ university }) {
    const universityId = encodeURIComponent(university.name);

    return (
     <div className="border p-4 rounded-lg shadow hover:shadow-md transition bg-white">
      <h2 className="text-xl font-semibold">{university.name}</h2>
      <p className="text-gray-600">{university['state-province'] || 'N/A'}, {university.country}</p>
      <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer" className="text-blue-600">
        Visit Website
      </a>
      <br />
      <Link to={`/universities/${universityId}`} className="text-blue-600 mt-2 inline-block">
        View Details
      </Link>
    </div>
    );
}

export default UniversityCard;
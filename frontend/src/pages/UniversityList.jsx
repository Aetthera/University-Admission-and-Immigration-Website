import universityData from '../data/world_universities_and_domains.json';
import UniversityCard from "../components/UniversityCard"; // Make sure this component exists

function UniversityList() {
  // Filter Quebec universities
  const quebecUniversities = universityData.filter(
    (uni) =>
      uni.country === 'Canada' &&
      (uni['state-province'] === 'Quebec' || uni.name.toLowerCase().includes('quebec'))
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Quebec Universities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quebecUniversities.map((uni, index) => (
          <UniversityCard key={uni.name || index} university={uni} />
        ))}
      </div>
    </div>
  );
}

export default UniversityList;
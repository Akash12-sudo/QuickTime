import TabNavigationBar from '../../components/TabNavigationBar';
import TurfCard from '../../components/TurfCard';
import { turfDetailsArray } from '../../../constants';
// For testing purpose

const LandingPage = () => {
  return (
    <main className="min-h-screen flex flex-col mt-4 mb-10 items-center">
      {/* Tab Navigation */}
      <TabNavigationBar />

      {/* Main Content */}
      <div className=" h-full w-full flex flex-col mt-[180px]">
        <div className="flex justify-start items-start py-8">
          <img src="/filters.svg" alt="filter" className="w-[85px] h-[36px]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {turfDetailsArray.map((turfcard, index) => (
            <TurfCard key={index} {...turfcard} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default LandingPage;

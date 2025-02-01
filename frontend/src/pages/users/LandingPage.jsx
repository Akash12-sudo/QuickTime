import TabNavigationBar from '../../components/TabNavigationBar';
import TurfCard from '../../components/TurfCard';
import { useSelector } from 'react-redux';

const LandingPage = () => {
  const { turflist } = useSelector((state) => state.turfs);
  console.log(turflist);

  return (
    <main className="min-h-screen w-full flex flex-col mt-4 mb-10 items-center">
      {/* Tab Navigation */}
      <TabNavigationBar />

      {/* Main Content */}
      <div className=" h-full w-full flex flex-col mt-[180px]">
        {/* <div className="flex justify-start items-start py-8">
          <img src="/filters.svg" alt="filter" className="w-[85px] h-[36px]" />
        </div> */}

        {turflist.length ? (
          <div className="mt-20 sm:mt-10 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-12">
            {turflist.map((turfcard, index) => (
              <TurfCard key={index} index={index} {...turfcard} />
            ))}
          </div>
        ) : (
          <h1 className="text-3xl">No turfs found!</h1>
        )}
      </div>
    </main>
  );
};

export default LandingPage;

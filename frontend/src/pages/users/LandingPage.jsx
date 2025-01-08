
import TabNavigationBar from '../../components/TabNavigationBar';
import TurfCard from '../../components/TurfCard';

// For testing purpose
const turfDetailsArray = [
  {
    turfName: "Sunrise Arena",
    sportType: "Football | Cricket",
    address: "Vijaynagar, Mysuru",
    rating: "4.3",
    rate: "1200",
    distance: "1.8"   
  },
  {
    turfName: "Sunrise Arena",
    sportType: "Football | Cricket",
    address: "Vijaynagar, Mysuru",
    rating: "4.3",
    rate: "1200",
    distance: "1.8"   
  }
  ,    {
    turfName: "Sunrise Arena",
    sportType: "Football | Cricket",
    address: "Vijaynagar, Mysuru",
    rating: "4.3",
    rate: "1200",
    distance: "1.8"   
  },
  {
    turfName: "Sunrise Arena",
    sportType: "Football | Cricket",
    address: "Vijaynagar, Mysuru",
    rating: "3.4",
    rate: "1200",
    distance: "1.8"   
  },
  {
    turfName: "Sunrise Arena",
    sportType: "Football | Cricket",
    address: "Vijaynagar, Mysuru",
    rating: "1.8",
    rate: "1200",
    distance: "1.8"   
  }
  ,    {
    turfName: "Sunrise Arena",
    sportType: "Football | Cricket",
    address: "Vijaynagar, Mysuru",
    rating: "4.3",
    rate: "1200",
    distance: "1.8"   
  }
]


const LandingPage = () => {

  return (
    <main className="min-h-screen flex flex-col mt-4 items-center">
      {/* Tab Navigation */}
        <TabNavigationBar />
    

      {/* Main Content */}
      <div className=" h-full w-full flex flex-col mt-[180px]">
        <div className="flex justify-start items-start py-8">
          <img src="/filters.svg" alt="filter" className="w-[85px] h-[36px]" />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
        {turfDetailsArray.map((turfcard, index) => (
          <TurfCard 
            key={index}  
            {...turfcard}
          />
        ))}
        </div>
      </div>
    </main>
  );
};

export default LandingPage;


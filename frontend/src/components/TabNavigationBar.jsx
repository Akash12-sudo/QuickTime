import { Link, useLocation } from 'react-router-dom';

const TabNavigationBar = () => {
  const location = useLocation();
  const activeTab = location.pathname;

  // Define the tabs as an array of objects for reusability
  const tabs = [
    {
      name: 'Book Turf',
      route: '/users/landing',
      icon: '/logo.svg',
      iconActive: '/bookturf-logo-active.svg',
    },
    {
      name: 'Share n play',
      route: '/users/shareplay',
      icon: '/shareplay.svg',
      iconActive: '/shareplay-active.svg',
    },
  ];

  return (
    <div className="w-11/12 lg:w-[1200px] fixed bg-background top-[120px] flex justify-center items-center">
      <nav className="w-full lg:w-[1200px] border-b-[1px] border-b-grayish flex justify-start gap-x-16 text-[16px] font-mediumlight">
        {tabs.map((tab) => (
          <Link
            key={tab.route}
            to={tab.route}
            className={`pb-4 h-full flex items-center gap-x-2 ${
              activeTab === tab.route ? 'border-b-2 border-secondary' : ''
            }`}
          >
            <img
              src={activeTab === tab.route ? tab.iconActive : tab.icon}
              alt={tab.name.toLowerCase().replace(' ', '-')}
              className={`w-[56px] h-[56px] ${
                activeTab === tab.route ? 'fill-secondary' : ''
              }`}
            />
            <p className={`${activeTab === tab.route ? 'text-secondary' : ''}`}>
              {tab.name}
            </p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigationBar;

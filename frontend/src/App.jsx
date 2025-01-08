import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div className=" flex justify-center min-h-screen">
      <div className="w-full md:w-[1200px] flex flex-col">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;

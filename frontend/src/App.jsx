import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div className=" flex justify-center min-h-screen">
      <div className="w-11/12 lg:w-[1200px] flex flex-col">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;

import AvailableJobs from "./AvailableJobs";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
          <AvailableJobs />
        </div>
      </div>
    </>
  );
};

export default Home;

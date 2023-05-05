import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getJobs } from "../Redux/feature/All_Jobs/jobsAPIs";

// components
import SingleJobs from "./SingleJobs";

const AvailableJobs = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
        <h1 className="lws-section-title">All Available Jobs</h1>
        <div className="flex gap-4">
          <div className="search-field group flex-1">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input
              type="text"
              placeholder="Search Job"
              className="search-input"
              id="lws-searchJob"
            />
          </div>
          <select
            id="lws-sort"
            name="sort"
            // autocomplete="sort"
            className="flex-1"
          >
            <option>Default</option>
            <option>Salary (Low to High)</option>
            <option>Salary (High to Low)</option>
          </select>
        </div>
      </div>

      <div className="jobs-list">
        <SingleJobs />
      </div>
    </main>
  );
};

export default AvailableJobs;

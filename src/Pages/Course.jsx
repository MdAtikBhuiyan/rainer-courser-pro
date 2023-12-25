/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const token = localStorage.getItem("token");
  console.log(course);

  return (
    <div>
      <div className="w-full px-4 py-3 bg-white rounded-md shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-sm text-black">
            Starting at: {course?.schedule?.startDate}
          </span>
          <span className="px-3 py-1 text-xs text-black uppercase bg-success">
            {course?.level}
          </span>
        </div>

        <div>
          <h1 className="text-xl font-bold pt-4 mb-3 text-black">
            {course?.name}
          </h1>
          <p className="mt-2 text-sm text-black">
            <span className="font-semibold text-success">✓ Duration:</span> {course?.duration}
          </p>
          <p className="mt-2 text-sm text-black">
            <span className="font-semibold text-success">✓ Topics:</span> {course?.topics && course.topics.join(", ")}
          </p>
          <p className="mt-2 text-sm text-black">
            <span className="font-semibold text-success">✓ Class Days: </span> {course?.schedule?.classDays && course?.schedule?.classDays.join(", ")}
          </p>

          <p className="mt-2 text-sm text-black">
            <span className="font-semibold text-success">✓ Description: </span> {course?.description} tk
          </p>

          <p className="mt-2 text-sm text-black">
            <span className="font-semibold text-success">✓ End Date: </span>   {course?.schedule?.startDate}
          </p>
          <p className="mt-2 text-sm text-black">
            <span className="font-semibold text-success">✓ Class Time: </span>   {course?.schedule?.classTime}
          </p>
          <p className="mt-2 text-sm text-black">
            <span className="font-semibold text-success">✓ Price: </span>  {course?.price} tk
          </p>

        </div>
        {/* {!token && ( */}
          <div className=" flex mt-4">
            <Link to={`/courses/${course?._id}`}>
              <button
                href="#"
                className="text-white w-fit flex justify-center h-fit items-center gap-2 cursor-pointer btn btn-success"
              >
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Course;

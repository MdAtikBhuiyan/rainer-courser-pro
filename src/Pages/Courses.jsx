import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState();
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/api/courses").then((res) => {
      setCourses(res.data);
    });
  }, [axiosPublic]);
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto py-14">
      {courses?.map((course) => (
        <Course key={course._id} course={course} />
      ))}
    </div>
  );
};

export default Courses;

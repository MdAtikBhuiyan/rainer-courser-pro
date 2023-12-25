import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const CreateCourse = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    try {
      const toastId = toast.loading("Adding....");
      const response = await axiosSecure.post("/api/courses", {
        name: data.name,
        description: data.description,
        price: data.price,
        duration: data.duration,
        level: data.level,
        topics: data.topics.split(",").map((topic) => topic.trim()),
        schedule: {
          startDate: data.startDate,
          endDate: data.endDate,
          classDays: data.classDays.split(",").map((day) => day.trim()),
          classTime: data.classTime,
        },
      });

      console.log(response.data);
      toast.success("Course Added...", { id: toastId });
      reset()
    } catch (error) {
      console.error("Error creating course:", error);
      alert("Failed to create course.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center mt-14">
      <section className="max-w-4xl w-full h-fit py-10 px-12 mx-4 bg-white rounded-md shadow">
        <div className=" bg-transparent">
          <h2 className="text-xl md:text-3xl font-semibold text-success uppercase mb-8 text-center">
           Add Course
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-2 gap-5 ">
              <div>
                <label className="text-slate-800  ">Name</label>
                <input
                  type="text"
                  placeholder="Enter course title"
                  {...register("name", { required: true })}
                  className="block w-full px-4 py-2  text-slate-800 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-slate-800  ">Price</label>
                <input
                  type="text"
                  placeholder="Enter Price"
                  {...register("price", { required: true })}
                  className="block w-full px-4 py-2  text-slate-800 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-slate-800  ">Duration</label>
                <input
                  type="text"
                  placeholder="10 weeks"
                  {...register("duration", { required: true })}
                  className="block w-full px-4 py-2  text-slate-800 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-slate-800  ">Level</label>
                <input
                  type="text"
                  placeholder="Hard, Beginner"
                  {...register("level", { required: true })}
                  className="block w-full px-4 py-2  text-slate-800 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-slate-800  ">Topics</label>
                <input
                  type="text"
                  placeholder="Html, css, js and many more"
                  {...register("topics", { required: true })}
                  className="block w-full px-4 py-2  text-slate-800 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div className=" ">
                <label className="text-slate-800  ">Start Date</label>
                <input
                  type="date"
                  {...register("startDate", { required: true })}
                  className="block w-full px-4 py-2  text-slate-800 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div className=" my-4">
                <label className="text-slate-800  ">End Date</label>
                <input
                  type="date"
                  {...register("endDate", { required: true })}
                  className="block w-full px-4 py-2  text-slate-800 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div className=" my-4">
                <label className="text-slate-800  ">Class Days</label>
                <input
                  type="text"
                  placeholder="sunday, monday, tuesday..."
                  {...register("classDays", { required: true })}
                  className="block w-full px-4 py-2  text-slate-800 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div className=" my-4">
                <label className="text-slate-800  ">Class Time</label>
                <input
                  type="text"
                  placeholder="9 am"
                  {...register("classTime", { required: true })}
                  className="block w-full px-4 py-2  text-slate-800 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div className=" my-4">
                <label className="text-slate-800  ">Description</label>
                <input
                  type="text"
                  placeholder="enter description"
                  {...register("description", { required: true })}
                  className="block w-full px-4 py-2  text-slate-800 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            {/*  */}
            <div className="flex justify-end mt-6">
              <button className="w-full btn btn-success text-white text-base" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreateCourse;

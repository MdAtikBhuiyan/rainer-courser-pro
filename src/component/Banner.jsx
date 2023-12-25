import { Link } from "react-router-dom";
import banner from '/images/banner.jpg'

const Banner = () => {
  return (
    // <div
    //   className="px-8"
    // >
    //   <header >
    //     <div className=" py-6 mx-auto">
    //       <div className="items-center lg:flex">
    //         <div className="w-full lg:w-1/2">
    //           <div className="lg:max-w-lg leading-loose">
    //             <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-6xl leading-10">
    //               Explore, Learn,{" "}
    //               <span className=" text-pink-500">Course Pro</span>
    //             </h1>

    //             <p className="mt-3 text-[#414040] ">
    //               Explore a variety of online courses designed to elevate your skills and help you reach your aspirations. Join us in molding a better future through easily accessible and impactful learning opportunities. Enroll now and embark on the initial journey toward achieving your goals!
    //             </p>

    //             <Link to={'/courses'}>
    //               <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-pink-500 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
    //                 See Courses
    //               </button>
    //             </Link>
    //           </div>
    //         </div>

    //         <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
    //           <img
    //             className="w-full h-full lg:max-w-3xl rounded-lg"
    //             src={banner}
    //             alt="img"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    // </div>

    <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-3xl md:text-5xl text-white font-bold"> Learn, Grow, Succeed!</h1>
          {/* <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-6xl leading-10">
            Explore, Learn,{" "}
            <span className=" text-pink-500">Course Pro</span>
          </h1> */}
          <p className="mb-5">Explore a variety of online courses designed to elevate your skills and help you reach your aspirations. Join us in molding a better future through easily accessible and impactful learning opportunities. Enroll now and embark on the initial journey toward achieving your goals!</p>
          <Link to='/courses'>
            <button className="btn btn-success text-white text-base">View Courses</button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Banner;

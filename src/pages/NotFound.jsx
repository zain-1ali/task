import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="max-h-screen h-[100%] bg-white flex flex-col justify-center items-center  overflow-y-scroll">
  
      <div className="text-[120px] font-extrabold text-blue-600 leading-none mb-4">
        404
      </div>


      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Page Not Found
      </h1>

      <p className="text-gray-500 text-lg text-center max-w-md mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>


      <Link
        to="/dashboard"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>

      {/* <div className="mt-12">
        <img
          src="https://illustrations.popsy.co/gray/web-design.svg"
          alt="Not Found Illustration"
          className="w-[300px] md:w-[400px]"
        />
      </div> */}
    </div>
  );
};

export default NotFound;

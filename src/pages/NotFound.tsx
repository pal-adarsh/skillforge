import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    // Changed main background to dark gray (bg-gray-900)
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 text-center">
        
        {/* Decorative Area */}
        <div className="relative">
          {/* Changed decorative text color to be subtle against dark bg (text-gray-800) */}
          <h1 className="text-9xl font-extrabold text-gray-800 select-none tracking-widest">
            404
          </h1>
          {/* Changed badge to dark surface with light text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 border border-gray-700 px-3 py-1 text-sm font-medium text-gray-300 rounded rotate-12 shadow-lg">
            Page Not Found
          </div>
        </div>

        {/* Message Content */}
        <div className="space-y-4">
          {/* Main heading becomes white */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Oops! You seem lost.
          </h2>
          {/* Subtext becomes light gray */}
          <p className="text-lg text-gray-400">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6 mt-8">
          {/* Go Back Button - Dark Theme Outline Style */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center rounded-lg border border-gray-600 bg-transparent px-5 py-3 text-base font-medium text-gray-300 shadow-sm hover:bg-gray-800 hover:text-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go Back
          </button>

          {/* Home Button - Vibrant Contrast Style */}
          {/* Using a slightly brighter blue (blue-500 hover blue-400) looks better on dark themes than standard blue-600 */}
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
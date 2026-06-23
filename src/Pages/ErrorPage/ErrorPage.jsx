import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-error">404</h1>

        <h2 className="text-3xl font-bold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          The page you are looking for might have been removed,
          had its name changed, or is temporarily unavailable.
        </p>

        <div className="mt-8">
          <Link to="/" className="btn bg-orange-500 text-white">
            🐉 Back to Discount Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
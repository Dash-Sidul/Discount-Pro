import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const SearchError = () => {
    const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl border border-base-300">
        <div className="card-body items-center text-center">
          <div className="w-20 h-20 rounded-full bg-error/10 flex items-center justify-center">
            <FaSearch className="text-4xl text-error" />
          </div>

          <h2 className="card-title text-3xl font-bold mt-4">
            No Results Found
          </h2>

          <p className="text-base-content/70 mt-2">
            Sorry! We couldn't find any brand matching your search.
          </p>

          <div className="bg-base-200 rounded-lg p-4 w-full mt-4">
            <p className="text-sm">
              🔍 Try searching with:
            </p>

            <ul className="mt-2 text-sm list-disc list-inside text-left">
              <li>Correct brand name</li>
              <li>Different keyword</li>
              <li>Less specific search</li>
            </ul>
          </div>

          <div className="card-actions mt-6">
            <Link onClick={() => navigate(-1)}>
              <button className="btn btn-primary">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchError;
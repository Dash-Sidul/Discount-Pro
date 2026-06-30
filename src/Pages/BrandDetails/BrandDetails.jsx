import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const BrandDetails = () => {
  const id = useParams();
  const brands = useLoaderData();
  const brand = brands.find((data) => data._id === id.id);
  const { brand_name, brand_logo, rating, description, coupons, shop_Link } =
    brand;

  const handleCopy = () => {
    toast.success("Coupon copied successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Brand Information */}
      <div className="bg-base-100 rounded-2xl shadow-xl border border-base-300 p-8 mb-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={brand_logo}
            alt={brand_name}
            className="w-50 h-50 object-contain rounded-xl bg-yellow-100 p-2"
          />

          <div className="flex-1">
            <h1 className="text-4xl font-bold">{brand_name}</h1>

            <div className="flex items-center gap-2 mt-3">
              <FaStar className="text-yellow-500" />
              <span className="font-semibold">{rating}</span>
            </div>

            <p className="mt-4 text-gray-500">{description}</p>
          </div>
       
        </div>
            <h2 className="text-3xl font-bold mb-6">
        Available Coupons ({coupons.length})
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition"
          >
            <div className="card-body">
              <div className="badge bg-amber-800 text-white font-semibold badge-lg">
                {coupon.coupon_code}
              </div>

              <h2 className="card-title mt-3">{coupon.description}</h2>

              <div className="space-y-2 mt-3 text-sm">
                <p>
                  <span className="font-bold">Condition :</span>{" "}
                  {coupon.condition}
                </p>

                <p>
                  <span className="font-bold">Expiry :</span>{" "}
                  {coupon.expiry_date}
                </p>

                <p>
                  <span className="font-bold">Type :</span> {coupon.coupon_type}
                </p>
              </div>

              <div className="card-actions justify-between mt-6">
                <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
                  <button className="btn btn-outline text-amber-600">
                    <FaCopy />
                    Copy Code
                  </button>
                </CopyToClipboard>

                <a
                  href={shop_Link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn bg-amber-800 text-white"
                >
                  <FaExternalLinkAlt />
                  Use Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      ></ToastContainer>
      </div>

      {/* Coupon Section */}

      {/* <h2 className="text-3xl font-bold mb-6">
        Available Coupons ({coupons.length})
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition"
          >
            <div className="card-body">
              <div className="badge bg-amber-800 text-white font-semibold badge-lg">
                {coupon.coupon_code}
              </div>

              <h2 className="card-title mt-3">{coupon.description}</h2>

              <div className="space-y-2 mt-3 text-sm">
                <p>
                  <span className="font-bold">Condition :</span>{" "}
                  {coupon.condition}
                </p>

                <p>
                  <span className="font-bold">Expiry :</span>{" "}
                  {coupon.expiry_date}
                </p>

                <p>
                  <span className="font-bold">Type :</span> {coupon.coupon_type}
                </p>
              </div>

              <div className="card-actions justify-between mt-6">
                <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
                  <button className="btn btn-outline text-amber-600">
                    <FaCopy />
                    Copy Code
                  </button>
                </CopyToClipboard>

                <a
                  href={shop_Link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn bg-amber-800 text-white"
                >
                  <FaExternalLinkAlt />
                  Use Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      ></ToastContainer> */}
    </div>
   
  );
};

export default BrandDetails;

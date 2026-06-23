import { FaStar, FaTags, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const BrandCard = ({ brand }) => {
  const {
    _id,
    brand_name,
    rating,
    description,
    brand_logo,
    coupons,
    category,
    isSaleOn,
  } = brand;

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Logo */}
      <figure className="px-6 pt-6">
        <img
          src={brand_logo}
          alt={brand_name}
          className="h-24 object-contain"
        />
      </figure>

      <div className="card-body">
        {/* Brand Name & Sale Badge */}
        <div className="flex justify-between items-center">
          <h2 className="card-title">{brand_name}</h2>

          {isSaleOn && (
            <div className="badge badge-success badge-outline">
              Sale Live
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 text-warning">
          <FaStar />
          <span className="font-semibold">{rating}</span>
        </div>

        {/* Category */}
        <div>
          <span className="badge badge-primary badge-outline">
            {category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-3">
          {description}
        </p>

        {/* Coupon Count */}
        <div className="flex items-center gap-2 text-secondary font-medium">
          <FaTags />
          <span>
            {coupons.length} Available Coupon
            {coupons.length > 1 ? "s" : ""}
          </span>
        </div>

        {/* Button */}
        <div className="card-actions mt-4">
          <Link
            to={`/brands/${_id}`}
            className="btn bg-orange-400 hover:bg-orange-500 text-white w-full"
          >
            View Deals
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
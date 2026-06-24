import { FaTags } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";

const BrandOnSalesCard = ({ brand }) => {
  const {
    brand_name,
    brand_logo,
    category,
    coupons,
  } = brand;

  return (
    <div className="card bg-base-100 shadow-lg border border-base-200 hover:shadow-2xl transition-all duration-300 ">
      <div className="card-body items-center text-center">
        {/* Logo */}
        <div className="w-25 h-25 rounded-full shadow-2xl p-4 overflow-hidden  ">
          <img
            src={brand_logo}
            alt={brand_name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Brand Name */}
        <h2 className="card-title text-2xl font-bold mt-3">
          {brand_name}
        </h2>

        {/* Total Coupons */}
        <div className="badge badge-primary badge-lg gap-2 mt-2">
          <MdLocalOffer />
          {coupons.length} Coupons
        </div>

        {/* Category */}
        <div className="flex items-center gap-2 mt-4">
          <FaTags className="text-secondary" />
          <span className="font-medium">{category}</span>
        </div>

        {/* Sale Badge */}
        <div className="badge badge-success badge-outline mt-3">
          Sale Live 🔥
        </div>
      </div>
    </div>
  );
};

export default BrandOnSalesCard;
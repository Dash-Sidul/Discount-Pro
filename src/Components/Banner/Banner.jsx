import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-primary font-semibold mb-2">
          🔥 Exclusive Deals & Coupons
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Save More,
          <span className="text-[#FF5A3C]"> Shop Smarter</span>
        </h1>
      </div>

      <p className="text-lg text-gray-500 max-w-xl">
        Discover verified coupons, exciting discounts, and exclusive
        offers from top brands. Never miss a chance to save on your
        favorite products and services.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link to="/brands" className="btn bg-[#FF5A3C] text-white">
          Explore Deals
        </Link>

        <Link to="/brands" className="btn btn-outline">
          Browse Brands
        </Link>
      </div>

      <div className="flex flex-wrap gap-6 pt-4">
        <div>
          <h3 className="text-2xl font-bold text-primary">100+</h3>
          <p className="text-sm text-gray-500">Partner Brands</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-primary">1000+</h3>
          <p className="text-sm text-gray-500">Active Coupons</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-primary">24/7</h3>
          <p className="text-sm text-gray-500">Updated Deals</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
// // import { FaStar, FaTags, FaArrowRight } from "react-icons/fa";
// // import { Link } from "react-router";

// // const BrandCard = ({ brand }) => {
// //   const {
// //     _id,
// //     brand_name,
// //     rating,
// //     description,
// //     brand_logo,
// //     coupons,
// //     category,
// //     isSaleOn,
// //   } = brand;

// //   return (
// //     <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
// //       {/* Logo */}
// //       <figure className="px-6 pt-6">
// //         <img
// //           src={brand_logo}
// //           alt={brand_name}
// //           className="h-24 object-contain"
// //         />
// //       </figure>

// //       <div className="card-body">
// //         {/* Brand Name & Sale Badge */}
// //         <div className="flex justify-between items-center">
// //           <h2 className="card-title">{brand_name}</h2>

// //           {isSaleOn && (
// //             <div className="badge badge-success badge-outline">Sale Live</div>
// //           )}
// //         </div>

// //         {/* Rating */}
// //         <div className="flex items-center gap-2 text-warning">
// //           <FaStar />
// //           <span className="font-semibold">{rating}</span>
// //         </div>

// //         {/* Category */}
// //         <div>
// //           <span className="badge badge-primary badge-outline">{category}</span>
// //         </div>

// //         {/* Description */}
// //         <p className="text-sm text-gray-500 line-clamp-3">{description}</p>

// //         {/* Coupon Count */}
// //         <div className="flex items-center gap-2 text-secondary font-medium">
// //           <FaTags />
// //           <span>
// //             {coupons.length} Available Coupon
// //             {coupons.length > 1 ? "s" : ""}
// //           </span>
// //         </div>

// //         {/* Button */}
// //         <div className="card-actions mt-4">
// //           <Link
// //             to={`/brands/${_id}`}
// //             className="btn border-none bg-[linear-gradient(90deg,_#fcff9e_0%,_#c67700_100%)] text-black w-full hover:scale-105 transition-all duration-300"
// //           >
// //             View Deals
// //             <FaArrowRight />
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BrandCard;


// import { FaArrowRight, FaStar } from "react-icons/fa";
// import { Link } from "react-router";

// const BrandCard = ({ brand }) => {
//   const {
//     _id,
//     brand_name,
//     brand_logo,
//     description,
//     rating,
//     isSaleOn,
//   } = brand;

//   return (
//     <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-100">
//       <div className="flex flex-col  items-center gap-5">
//         {/* Logo */}
//         <div className="shadow-2xl">
//           <img
//             src={brand_logo}
//             alt={brand_name}
//             className="w-full h-24 rounded-xl object-cover border"
//           />
//         </div>

//         {/* Brand Info */}
//         <div className="flex text-center justify-between w-10/12 mx-auto items-center md:text-left">
//           <h2 className="text-2xl font-bold">{brand_name}</h2>

//           <div className="flex items-center justify-around gap-2 mt-2">
//             <FaStar className="text-yellow-500" />
//             <span className="font-medium">{rating}</span>
//           </div>

          
//         </div>
//         <p className="text-gray-600 mt-3">
//             {description}
//           </p>

//         {/* Action */}
//         <div className="flex flex-col items-center gap-3">
//           {isSaleOn && (
//             <p className="text-red-500 font-bold animate-bounce">
//               🔥 Sale Is On
//             </p>
//           )}

//           <Link
//             to={`/brands/${_id}`}
//             className="btn border-none  bg-linear-to-r from-[#fcff9e] to-[#c67700] text-black hover:scale-105 transition-all"
//           >
//             View Coupons
//             <FaArrowRight />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandCard;

import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const BrandCard = ({ brand }) => {
  const {
    _id,
    brand_name,
    brand_logo,
    description,
    rating,
    isSaleOn,
  } = brand;

  return (
    <div className="bg-amber-50 flex flex-1 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-100">
      <div className="flex flex-col  items-center gap-5">
        {/* Logo */}
        <div className="shrink-0">
          <img
            src={brand_logo}
            alt={brand_name}
            className="w-60 card shadow-2xl h-40 rounded-xl object-cover "
          />
        </div>

        {/* Brand Info */}
        <div className="flex justify-between text-center md:text-left w-full">
          <h2 className="text-2xl font-bold">{brand_name}</h2>

          <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <FaStar className="text-yellow-500" />
            <span className="font-medium">{rating}</span>
          </div>

          
        </div>
        <p className="text-gray-600 mt-3 min-h-24">
            {description}
          </p>

        {/* Action */}
        <div className="flex flex-col items-center gap-3">
          {/* {isSaleOn ? <p className="text-red-500 font-bold ">
              🔥 Sale Is On
            </p> : <p></p>} */}
            <p className={`font-bold ${isSaleOn ? "text-red animate-bounce" : "invisible"}`}>🔥 Sale Is On</p>

          <Link
            to={`/brand/${_id}`}
            className="btn border-none bg-linear-to-r from-[#fcff9e] to-[#c67700] text-black hover:scale-105 transition-all"
          >
            View Coupons
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
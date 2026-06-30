// import { useLoaderData } from "react-router";
// import BrandCard from "../../Pages/BrandCard/BrandCard";


// const Brands = () => {
//     const brandsData = useLoaderData();
//     console.log(brandsData);
//     return (
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
//             {
//                 brandsData.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
//             }
//         </div>
//     );
// };

// export default Brands;

import { useState } from "react";
import BrandCard from "../../Pages/BrandCard/BrandCard";
import { useLoaderData } from "react-router";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import SearchError from "../../Pages/SearchError/SearchError";


const Brands = () => {
  const [search, setSearch] = useState("");
  const brands = useLoaderData()
  console.log(brands);

  const filteredBrands = brands.filter((brand) =>
    brand.brand_name
      .toLowerCase()
      .includes(search.toLowerCase())
  );
 

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        All Brands
      </h1>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search brand..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {
          filteredBrands.length === 0 && <SearchError></SearchError>
        }

      {/* Cards */}
      <div className="space-y-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {filteredBrands.map((brand) => (
          <BrandCard
            key={brand._id}
            brand={brand}
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
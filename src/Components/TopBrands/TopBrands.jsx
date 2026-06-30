// import Marquee from "react-fast-marquee";
import MarqueeModule from "react-fast-marquee";
import { Link } from "react-router";

const TopBrands = ({ brands }) => {
  console.log(brands);
    const Marquee = MarqueeModule.default || MarqueeModule
    // console.log(marquee);
    // console.log(brands);
  return (
    <section className="py-16 bg-[linear-gradient(90deg,_#FDBB2D_0%,_#22C1C3_100%)]">
      <div className="max-w-7xl mx-auto px-4 my-10">

        
        
        <div className="text-center mb-10 bg-[linear-gradient(90deg,_#FDBB2D_0%,_#22C1C3_100%)]">
          <h2 className="text-4xl font-bold text-white">
            Top Brands
          </h2>

          <p className="text-gray-500 mt-3">
            Discover amazing discounts from your favorite brands
          </p>
        </div>
        

        {/* <marquee
          pauseOnHover={true}
          speed={60}
          gradient={false}
        >
          {brands.map((brand) => (
            <Link
              key={brand._id}
              to={`/brands/${brand._id}`}
              className="mx-4 "
             >
                <div className=" bg-white rounded-xl shadow-md  p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"> 
           
                 <img
                  src={brand.brand_logo}
                  alt={brand.brand_name}
                  className="max-h-14 object-contain"
                />
                <p>{brand.brand_name}</p>
              </div>
            </Link>
          ))} 
            
          
        </marquee>  */}
         <Marquee pauseOnHover={true} speed={60} gradient={false}>
          {brands.map((brand) => (
            <Link
              key={brand._id}
              // to={`/brands/${brand._id}`}
              to={brand.shop_Link}
              className="flex gap-500"
            >
              <div className="bg-white w-40 flex flex-col justify-center items-center gap-2 rounded-xl shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <img
                  src={brand.brand_logo}
                  alt={brand.brand_name}
                  className="max-h-14 object-contain"
                />
                <p>{brand.brand_name}</p>
              </div>
            </Link>
          ))}
        </Marquee>
        


   


      </div>
    </section>
  );
};

export default TopBrands;
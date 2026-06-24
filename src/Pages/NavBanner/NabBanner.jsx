import { useLoaderData } from "react-router";
import Banner from "../../Components/Banner/Banner";
import BannerSlider from "../../Components/BannerSlider/BannerSlider";
import Home from "../Home/Home";
import TopBrands from "../../Components/TopBrands/TopBrands";
import BrandOnSales from "../../Components/BrandOnSales/BrandOnSales";

const NabBanner = () => {
  const brands = useLoaderData();
  console.log(brands);
 
  return (
    <div className="mt-20">
      
        <div className=" flex gap-4 mb-10 justify-between w-11/12 mx-auto">
            <div className="w-full"><Banner></Banner></div>
            <div className="w-1/2"><BannerSlider></BannerSlider></div>
        
        
      </div>
        <TopBrands brands={brands}></TopBrands>
      <Home brands={brands}></Home>
      <BrandOnSales brands= {brands}></BrandOnSales>
    
    </div>
  );
};

export default NabBanner;

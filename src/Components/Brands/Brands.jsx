import { useLoaderData } from "react-router";
import BrandCard from "../../Pages/BrandCard/BrandCard";


const Brands = () => {
    const brandsData = useLoaderData();
    console.log(brandsData);
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
            {
                brandsData.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
            }
        </div>
    );
};

export default Brands;
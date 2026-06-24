import BrandOnSalesCard from "../BrandOnSalesCard/BrandOnSalesCard";


const BrandOnSales = ({brands}) => {
    const data = brands.filter(brand => brand.isSaleOn === true)
    console.log(data);
    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                data.map(brand => <BrandOnSalesCard key={brand.id} brand={brand}></BrandOnSalesCard>)
            }
        </div>
    );
};

export default BrandOnSales;
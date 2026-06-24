import { useLoaderData, useParams } from "react-router";


const BrandDetails = () => {
    const id = useParams();
    const brands = useLoaderData();
   
    const brand = brands.find(data => data._id === id.id)
    console.log(brand);
    
    console.log(id.id);
    return (
        <div>
            All details here 
           
        </div>
    );
};

export default BrandDetails;
import React from 'react';
// import BrandCard from '../../Components/BrandCard/BrandCard';

const Home = ({brands}) => {
  console.log(brands);
  return (
    <div>
      
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* {
        brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
      } */}
      </div>
    </div>
  );
};

export default Home;
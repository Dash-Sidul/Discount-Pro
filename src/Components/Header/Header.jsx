// import furniture from "https://www.magnific.com/free-psd/midcentury-modern-furniture-collection-sofa-armchairs-wooden-tables_409093749.htm#fromView=search&page=1&position=24&uuid=fba452e7-47ca-47d5-8eb9-31d06a17afd2&query=furniture"
// import BannerSlider from "../BannerSlider/BannerSlider";

import { NavLink } from "react-router";
// import BannerSlider from "../BannerSlider/BannerSlider";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import Login from "../../Pages/Login/Login";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Header = () => {
  const {user, logOut} = use(AuthContext)
  const handleLogOut = () =>{
    logOut()
  }

  return (
    <div className="flex justify-between items-center mt-4">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-[#1A1530]">
          Discount<span className="text-[#FF5A3C]"> PRO</span>
        </h1>
      </div>

      <div>
       <NavbarLinks></NavbarLinks>
      </div>
        
          
        
      <div className="flex justify-center items-center gap-2">
        {
            user && <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full" />
          }
        {
          user ? <button onClick={handleLogOut} className="btn bg-amber-500">Log Out</button> :
          <NavLink to='/login' >Login</NavLink>
        }
        
      </div>
    </div>
  );
};

export default Header;

import { NavLink } from "react-router";

const NavbarLinks = () => {
  return (
    <div className="flex items-center gap-6 font-medium text-gray-700">

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-bold border-b-2 border-orange-500 pb-1"
            : "hover:text-orange-500 transition"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/brands"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-bold border-b-2 border-orange-500 pb-1"
            : "hover:text-orange-500 transition"
        }
      >
        Brands
      </NavLink>

      <NavLink
        to="/my-profile"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-bold border-b-2 border-orange-500 pb-1"
            : "hover:text-orange-500 transition"
        }
      >
        My Profile
      </NavLink>

    </div>
  );
};

export default NavbarLinks;
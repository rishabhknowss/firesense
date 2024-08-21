import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

// Define Navbar items for general routes
const GeneralNavbarItems = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Products",
    route: "/products",
  },
  {
    label: "About Us",
    route: "/about",
  },
];

// Define Navbar items for the dashboard route
const DashboardNavbarItems = [
  {
    label: "Dashboard",
    route: "/dashboard",
  },
  {
    label: "AMC",
    route: "/dashboard/AMC",
  }
];

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine which Navbar items to display based on the current route
  const NavbarItems = location.pathname.startsWith("/dashboard")
    ? DashboardNavbarItems
    : GeneralNavbarItems;

  useEffect(() => {
    const currentRoute = location.pathname;
    const active = NavbarItems.find((item) => item.route === currentRoute);
    if (active) {
      setActive(active.label);
    } else {
      setActive("");
    }
  }, [location.pathname, NavbarItems]);

  const handler = (item) => {
    setActive(item);
    const route = NavbarItems.find((i) => i.label === item);
    navigate(route.route);
    setIsMenuOpen(false); // Close the menu when an item is selected
  };

  return (
    <div className="flex justify-between items-center p-4 md:p-6 text-md">
      
      <img src={logo} alt="logo" className="cursor-pointer" onClick={()=>navigate('/')} />

      {/* Navbar Items */}
      <div className="hidden md:flex space-x-8 flex-grow justify-center">
        {NavbarItems.map((item) => (
          <div
            key={item.label}
            onClick={() => handler(item.label)}
            className={`${
              item.label === active ? "text-black" : "text-gray-400"
            } cursor-pointer text-lg`}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Contact Us button */}
     
        <div className="hidden md:flex cursor-pointer">
          <div className="border px-4 py-2 rounded-xl text-white bg-black text-md">
            Contact Us
          </div>
        </div>
      

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <XIcon className="w-6 h-6 text-black" />
          ) : (
            <MenuIcon className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden">
          {NavbarItems.map((item) => (
            <div
              key={item.label}
              onClick={() => handler(item.label)}
              className={`${
                item.label === active ? "text-black" : "text-gray-400"
              } cursor-pointer text-lg`}
            >
              {item.label}
            </div>
          ))}
          {location.pathname !== "/dashboard" && (
            <div
              onClick={() => handler("Contact Us")}
              className="border px-4 py-2 rounded-xl text-white bg-black text-md cursor-pointer"
            >
              Contact Us
            </div>
          )}
        </div>
      )}
    </div>
  );
};

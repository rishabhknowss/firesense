import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavbarItems = [
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

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentRoute = location.pathname;
    const active = NavbarItems.find((item) => item.route === currentRoute);
    if (active) {
      setActive(active.label);
    } else {
      setActive("");
    }
  }, [location.pathname]);

  const handler = (item) => {
    setActive(item);
    const route = NavbarItems.find((i) => i.label === item);
    navigate(route.route);
    setIsMenuOpen(false); // Close the menu when an item is selected
  };

  return (
    <div className="flex justify-between items-center p-6 text-md">
      <img src={logo} alt="logo" />

      <div className="hidden md:flex space-x-8">
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

      <div className="hidden md:flex cursor-pointer">
        <div className="border px-4 py-2 rounded-xl text-white bg-black text-md">
          Contact Us
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <XIcon className="w-6 h-6 text-black" />
          ) : (
            <MenuIcon className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

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
          <div
            onClick={() => handler("Contact Us")}
            className="border px-4 py-2 rounded-xl text-white bg-black text-md cursor-pointer"
          >
            Contact Us
          </div>
        </div>
      )}
    </div>
  );
};
  
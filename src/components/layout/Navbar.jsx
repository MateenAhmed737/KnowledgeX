import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { navLinks } from "../../constants";

import logo from "../../assets/images/logo_black.png";
import LanguageSelector from "./LanguageSelector";
import Button from "../Button";

const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [toggleNav, setToggleNav] = useState(false);

  const isArabic = i18n.language === "ar";

  const close = () => setToggleNav(false);

  const styles = {
    backdrop: `fixed inset-0 z-10 bg-black/70 ease-out backdrop-blur-sm md:hidden transition-all duration-500 ${
      toggleNav ? "opcity-100" : "opacity-0 pointer-events-none"
    }`,
    sideMenuContainer: `fixed inset-0 left-0 z-20 grid grid-cols-6 ${
      toggleNav ? "" : "pointer-events-none"
    }`,
    sideMenu: `col-span-4 bg-white transition-all duration-500 p-6 ${
      toggleNav ? "translate-x-0" : "-translate-x-full"
    }`,
  };

  useEffect(() => {
    setToggleNav(false);
  }, [location.pathname]);

  return (
    <header
      className={`w-full max-w-7xl mx-auto px-4 flex items-center justify-between space-x-4 ${
        isArabic ? "flex-row-reverse" : ""
      }`}
    >
      <Link to="/">
        <img src={logo} alt="KnowledgeX" className="h-24" />
      </Link>

      <nav className="hidden md:block">
        <ul
          className={`list-none flex items-center *:text-gray-400 *:hover:text-gray-600 *:transition-all *:duration-200 space-x-5 ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          <NavLinks />
        </ul>
      </nav>

      <div className={`space-x-4 hidden md:flex items-center ${isArabic ? "flex-row-reverse" : ""}`}>
        <LanguageSelector />
        <Button>Contact Us</Button>
      </div>

      {/* -- For small devices -- */}
      <div className="md:hidden">
        <Button onClick={() => setToggleNav(true)}>
          <MdMenu className="text-lg" />
        </Button>

        {/* Backdrop */}
        <div className={styles.backdrop} />

        <div className={styles.sideMenuContainer}>
          {/* Side Menu */}
          <div className={styles.sideMenu}>
            <ul className="list-none flex flex-col items-start space-y-3 xs:text-lg mb-6">
              <NavLinks />
            </ul>

            <div className="border border-x-0 border-y py-3">
              <LanguageSelector />
            </div>
            <Button className="mt-4 w-full text-base">Contact Us</Button>
          </div>

          {/* Close Btn */}
          <div className="col-span-2 flex justify-end items-start">
            {toggleNav && (
              <Button
                className="border-none rounded-md text-xl mt-6 mr-4 text-primary-500 bg-white"
                onClick={close}
              >
                <MdClose />
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLinks = () => {
  const { t } = useTranslation();
  return navLinks.map(({ label, path }) => (
    <li key={label}>
      <NavLink
        className={({ isActive }) =>
          `${
            isActive ? "text-primary-500" : "text-gray-700"
          } hover:text-primary-500 transition-all duration-200`
        }
        to={path}
      >
        {t(label)}
      </NavLink>
    </li>
  ));
};

export default Navbar;

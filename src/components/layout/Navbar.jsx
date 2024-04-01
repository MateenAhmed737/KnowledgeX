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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <header
      className={`w-full max-w-7xl mx-auto px-4 flex items-center justify-between space-x-4 ${
        isArabic ? "flex-row-reverse" : ""
      }`}
    >
      <div className="absolute -right-0 opacity-70 xs:opacity-100 scale-[1.5] md:-right-0 -top-0 rotate-12 z-0 pointer-events-none size-96 md:scale-[3] bg-radial-gradient" />
      <Link to="/">
        <img src={logo} alt="KnowledgeX" className="h-24" />
      </Link>

      <nav className="hidden md:block">
        <ul
          className={`list-none flex items-center *:text-gray-400 *:hover:text-gray-600 *:transition-all *:duration-200 ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          <NavLinks />
        </ul>
      </nav>

      <div
        className={`*:mx-1 hidden md:flex items-center ${
          isArabic ? "flex-row-reverse" : ""
        }`}
      >
        <LanguageSelector />
        <Button>{t("contact_us")}</Button>
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
            <ul className="flex flex-col items-start mb-6 space-y-3 list-none xs:text-lg">
              <NavLinks />
            </ul>

            <div className="py-3 border border-x-0 border-y">
              <LanguageSelector />
            </div>
            <Button className="w-full mt-4 text-base">{t("contact_us")}</Button>
          </div>

          {/* Close Btn */}
          <div className="flex items-start justify-end col-span-2">
            {toggleNav && (
              <Button
                className="mt-6 mr-4 text-xl bg-white border-none rounded-md text-primary-500"
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
  const handleClick = (e) => {
    const name = e.target.name;
    console.log("name.slice(2)", name.slice(2));
    if (name !== "/blog") {
      setTimeout(() => {
        document
          .getElementById(name.slice(2))
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return navLinks.map(({ label, path }) => {
    if (path !== "/blog") {
      return (
        <li key={label}>
          <Link
            name={path}
            className="text-gray-700 hover:text-primary-500 md:mx-2.5 transition-all duration-200"
            onClick={handleClick}
            to={path}
          >
            {t(label)}
          </Link>
        </li>
      );
    }

    return (
      <li key={label}>
        <NavLink
          name={path}
          className={({ isActive }) =>
            `${
              isActive ? "text-primary-500" : "text-gray-700"
            } hover:text-primary-500 md:mx-2.5 transition-all duration-200`
          }
          to={path}
        >
          {t(label)}
        </NavLink>
      </li>
    );
  });
};

export default Navbar;

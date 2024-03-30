import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants";
import { VscGlobe } from "react-icons/vsc";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const currentLng = i18n.language === "en" ? "العربية" : "English";

  const onLanguageChange = (lng_code) => {
    i18n.changeLanguage(lng_code);
  };

  return (
    <MenuTrigger>
      <Button
        aria-label="Menu"
        className={`capitalize mx-auto justify-center bg-transparent font-medium flex items-center outline-none text-gray-600 hover:text-gray-900 border border-transparent rounded focus:border-primary-500 p-1 ${isArabic ? "flex-row-reverse *:mx-1" : "space-x-2"}`}
      >
        <span>{currentLng}</span>
        <VscGlobe className="text-xl" />
      </Button>
      <Popover
        crossOffset={-15}
        className="bg-white/80 mx-auto backdrop-blur-sm py-1.5 border outline-none border-gray-300 rounded-md shadow-md"
      >
        <Menu onAction={onLanguageChange} className="outline-none">
          {LANGUAGES.map(({ code, label }) => (
            <MenuItem
              key={code}
              id={code}
              className="py-0.5 px-5 outline-none focus:bg-gray-200 hover:bg-gray-200 text-black cursor-pointer"
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
};

export default LanguageSelector;

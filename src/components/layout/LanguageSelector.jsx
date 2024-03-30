import {
  Button,
} from "react-aria-components";
import { useTranslation } from "react-i18next";
import { VscGlobe } from "react-icons/vsc";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const currentLng = i18n.language === "en" ? "English" : "العربية";

  const onLanguageChange = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  return (
    <Button
      onPress={onLanguageChange}
      className={`capitalize mx-auto justify-center bg-transparent font-medium flex items-center outline-none text-gray-600 hover:text-gray-900 border border-transparent rounded focus:border-primary-500 p-1 ${
        isArabic ? "flex-row-reverse *:mx-1" : "space-x-2"
      }`}
    >
      <span>{currentLng}</span>
      <VscGlobe className="text-xl" />
    </Button>
  );
};

export default LanguageSelector;

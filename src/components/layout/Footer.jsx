import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FiLinkedin, FiPhone } from "react-icons/fi";
import Logo from "../../assets/images/Logo.png";
import Button from "../Button";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <footer className={`p-5 text-black ${isArabic ? "text-right" : "text-left"}`}>
      <div className="w-full max-w-5xl mx-auto">
        <div className={`bg-[#071C2F] text-white rounded-lg flex flex-col items-center justify-between p-6 px-8 max-xs:space-y-4 xs:*:mx-1 ${isArabic ? "xs:flex-row-reverse" : "xs:flex-row"}`}>
          <div className={`flex flex-col items-center *:mr-2 max-xs:space-y-2 max-xs:text-center ${isArabic ? "xs:flex-row-reverse" : "xs:flex-row"}`}>
            <div className="inline-block p-4 text-3xl text-gray-100 rounded-full bg-primary-600">
              <MdOutlineEmail />
            </div>
            <div className={`inline-flex flex-col items-center ${isArabic ? "xs:items-end" : "xs:items-start"} space-y-1`}>
              <h6>{t("work_with_us")}</h6>
              <p className="text-xs text-gray-400 sm:w-4/6">
                {t("footer_subtext")}
              </p>
            </div>
          </div>
          <Button className="py-3.5 text-nowrap" fill>
            {t("lets_get_in_touch")}
          </Button>
        </div>
        <div className={`flex flex-col ${isArabic ? "sm:flex-row-reverse" : ""} items-center justify-between py-4 sm:flex-row`}>
          <img src={Logo} alt="KnowledgeX" />
          <div className="flex items-center space-x-3">
            <Link
              to="tel:+966555555555"
              className="flex items-center text-gray-800 transition-all duration-200 hover:text-primary-500 *:mr-1 *:text-lg"
            >
              <FiPhone />
              +966 555555555
            </Link>
            <Link
              to="mailto:knowledgex@gamil.com"
              className="flex items-center text-gray-800 transition-all duration-200 hover:text-primary-500 *:mr-1 *:text-lg"
            >
              <MdOutlineEmail />
              knowledgex@gamil.com
            </Link>
          </div>
        </div>
        <div className={`flex flex-col items-center ${isArabic ? "sm:flex-row-reverse" : ""} justify-center py-4 sm:flex-row sm:justify-between`}>
          <span className="text-sm text-gray-800 sm:text-center">
            {t("footer_copyright")}
          </span>
          <div className="flex mt-4 space-x-3 sm:justify-center sm:mt-0">
            <Link
              to="https://x.com"
              className="text-lg text-gray-800 hover:text-primary-600"
            >
              <FaXTwitter />
            </Link>
            <Link
              to="https://linkedin.com"
              className="text-lg text-gray-800 hover:text-primary-600"
            >
              <FiLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

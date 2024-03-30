import { Link } from "react-router-dom";
import { LuChevronRightCircle } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import { monthsInArabic } from "../../constants";

const RelatedArticleCard = ({ id, title, body, cover, published_at }) => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const path = `/blog/${id}`;

  const year = new Date(published_at).getFullYear();
  const month = monthsInArabic[new Date(published_at).getMonth() + 1];
  const day = new Date(published_at).getDate();

  return (
    <div className={`flex ${isArabic ? "flex-row-reverse text-right" : "text-left"} max-w-lg p-3 mx-auto bg-white border border-gray-200 shadow-xl space-x-4 rounded-xl shadow-gray-200`}>
      <Link
        to={path}
        className={`flex items-center justify-center ${isArabic ? "ml-3" : ""} w-1/2 overflow-hidden rounded-lg max-h-56`}
      >
        <img
          src={cover}
          className="object-cover object-center w-full h-full"
          alt="cover"
        />
      </Link>
      <div className="w-1/2">
        <div className={`flex items-center text-sm text-primary-500 ${isArabic ? "flex-row-reverse text-right *:ml-1" : "text-left *:mr-1.5"}`}>
          <FiClock />
          <span>
          {`${year} ${month} ${day}`}
          </span>
        </div>
        <Link to={path}>
          <h5 className="mb-2 font-bold leading-snug text-gray-700 capitalize hover:text-gray-900">
            {t("title")}
          </h5>
        </Link>
        <p className={`mb-3 text-sm font-normal text-gray-500 line-clamp-3`}>
          {t("body")}
        </p>
        <Link to={path}>
          <Button className="!text-sm !font-semibold !py-2 !px-2.5 capitalize">
            <LuChevronRightCircle className={`inline-block text-lg ${!isArabic ? "hidden" : "rotate-180 mr-1"}`} />
            {t("read_more")}{" "}
            <LuChevronRightCircle className={`inline-block ml-1 text-lg ${isArabic ? "hidden" : ""}`} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RelatedArticleCard;

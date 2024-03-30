import { Link } from "react-router-dom";
import { LuChevronRightCircle } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import Button from "../Button";

const ArticleCard = ({ id, title, body, cover, isSpecial }) => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const path = `/blog/${id}`;

  return (
    <div
      className={`flex flex-col max-w-lg p-3 mx-auto space-y-2 bg-white border border-gray-200 shadow-xl ${
        isSpecial
          ? "min-[950px]:row-span-2"
          : "min-[950px]:flex-row min-[950px]:space-x-4"
      } sm:p-5 rounded-xl shadow-gray-200`}
    >
      <Link
        to={path}
        className={`flex items-center justify-center ${
          isSpecial ? "max-[950px]:w-full" : "min-[950px]:w-2/5"
        } h-full overflow-hidden rounded-lg ${
          isSpecial ? "max-[950px]:max-h-56" : "max-h-56"
        }`}
      >
        <img
          src={cover}
          className="object-cover object-center w-full h-full"
          alt="cover"
        />
      </Link>
      <div className={isSpecial ? "max-[950px]:w-full" : "min-[950px]:w-3/5"}>
        <div
          className={`flex items-center text-sm text-primary-500 ${
            isArabic
              ? "flex-row-reverse text-right *:ml-1"
              : "text-left *:mr-1.5"
          }`}
        >
          <FiClock />
          <span>{t("date")}</span>
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
            <LuChevronRightCircle
              className={`inline-block text-lg ${
                !isArabic ? "hidden" : "rotate-180 mr-1"
              }`}
            />
            {t("read_more")}{" "}
            <LuChevronRightCircle
              className={`inline-block ml-1 text-lg ${
                isArabic ? "hidden" : ""
              }`}
            />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;

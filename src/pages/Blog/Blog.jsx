import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArticleCard, Button, Page } from "../../components";
import { HiMiniHome } from "react-icons/hi2";
import { articles } from "../../constants/dummyData";

const Blog = () => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <Page title="Blog" className={isArabic ? "text-right" : "text-left"}>
      <br />
      {/* Breadcrumbs */}
      <div className="px-3">
        <nav className="flex justify-center my-2" aria-label="Breadcrumb">
          <ol className={`inline-flex items-center justify-center space-x-1 md:space-x-2 rtl:space-x-reverse ${isArabic ? "flex-row-reverse" : ""}`}>
            <li className="inline-flex items-center">
              <Link
                to="/"
                className={`inline-flex items-center font-semibold text-primary-400 hover:text-primary-500 ${isArabic ? "flex-row-reverse" : ""}`}
              >
                <HiMiniHome className="mr-1 text-xl" />
                {t("home")} <span>&nbsp;/</span>
              </Link>
            </li>
            <li>
              <div>
                <span className="font-medium text-gray-500 ms-1">
                  {t("blog")}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="mb-4 text-5xl font-semibold text-center">{t("blog")}</h1>
        <br />
        <br />

        {/* Article Listing Here */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-3 mx-auto sm:gap-4 sm:grid-cols-2">
          {articles.map((article, indx) => (
            <ArticleCard key={article.id} {...article} isSpecial={indx === 0} />
          ))}
        </div>
        <br />

        <div className="flex justify-center my-4">
          <Button>Load More</Button>
        </div>
      </div>
      <br />
      <br />
    </Page>
  );
};

export default Blog;

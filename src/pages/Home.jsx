import { useTranslation } from "react-i18next";
import { ArticleCard, Button, Page } from "../components";
import Symbol from "../assets/images/Symbol.png";
import SunFog from "../assets/images/sun-fog.png";
import Book from "../assets/images/book.png";
import GlobalSearch from "../assets/images/global-search.png";
import LampCharge from "../assets/images/lamp-charge.png";
import Frame4 from "../assets/images/Frame 4.png";
import Frame7 from "../assets/images/Frame 7.png";
import Frame3 from "../assets/images/Frame 3.png";
import Frame2 from "../assets/images/Frame 2.png";
import Group1 from "../assets/images/Group 1.png";
import Group2 from "../assets/images/Group 2.png";
import { FiExternalLink } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { articles } from "../constants/dummyData";
import { useNavigate } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const viewAllArticles = () => {
    navigate("/blog");
  };

  return (
    <Page title="Home" className={isArabic ? "text-right" : "text-left"}>
      <main className="w-full mx-auto text-center max-w-7xl max-lg:relative">
        {/* -- Background -- */}
        <img
          className="absolute object-cover w-1/2 pointer-events-none select-none max-lg:-top-28 lg:-top-4 opacity-70 -left-10 sm:-left-28 -z-10 max-w-96"
          src={Symbol}
          alt="symbol"
        />
        <br /> <br /> <br /> <br />
        {/* Content */}
        <h1 className="font-bold text-4xl xs:text-6xl capitalize px-2.5">
          {isArabic ? (
            t("hero_title")
          ) : (
            <>
              The journey of <br /> knowledge into values
            </>
          )}
        </h1>
        <p className="max-w-xl px-4 mx-auto my-6">{t("hero_subtext")}</p>
        <Button className="!py-3 !text-sm" fill>
          {t("lets_get_in_touch")}
        </Button>
      </main>
      <br /> <br /> <br />
      {/* Our Mission */}
      <section id="about-us" className="px-4 text-center">
        <h2 className="text-3xl font-bold">{t("our_mission")}</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-4 *:border-t *:border-t-primary-400 *:rounded-md *:px-2.5 *:py-4 *:shadow-xl *:max-w-[250px] *:mx-auto *:space-y-3 pt-8">
          <div>
            <img className="h-12 mx-auto xs:h-10" src={Book} alt="book" />
            <p>{t("mission1")}</p>
          </div>
          <div>
            <img
              className="h-12 mx-auto xs:h-10"
              src={GlobalSearch}
              alt="global search"
            />
            <p>{t("mission2")}</p>
          </div>
          <div>
            <img className="h-12 mx-auto xs:h-10" src={SunFog} alt="sun fog" />
            <p>{t("mission3")}</p>
          </div>
          <div>
            <img className="h-12 mx-auto xs:h-10" src={LampCharge} alt="lamp" />
            <p>{t("mission4")}</p>
          </div>
        </div>
      </section>
      <br /> <br /> <br />
      <br />
      {/* Our Values */}
      <section className="px-4 py-20 pt-8 text-center bg-white">
        <h2 className="mb-8 text-3xl font-bold">{t("our_values")}</h2>

        <div className="max-w-6xl mx-auto overflow-hidden text-white rounded-lg sm:grid sm:grid-cols-2">
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center bg-primary-500">
              {t("value1")}
            </div>
            <img src={Frame3} alt="value" />
          </div>
          <div className="flex flex-row-reverse grid-cols-2 sm:grid">
            <div className="flex items-center justify-center bg-primary-500 max-sm:w-1/2">
              {t("value2")}
            </div>
            <img src={Frame7} alt="Learn" className="max-sm:w-1/2" />
          </div>
          <div className="grid grid-cols-2">
            <img src={Frame4} alt="Trust" />
            <div className="flex items-center justify-center bg-gray-800">
              {t("value3")}
            </div>
          </div>
          <div className="flex flex-row-reverse grid-cols-2 sm:grid">
            <img src={Frame2} alt="Connect" className="max-sm:w-1/2" />
            <div className="flex items-center justify-center bg-gray-800 max-sm:w-1/2">
              {t("value4")}
            </div>
          </div>
        </div>
      </section>
      {/* Our Programs */}
      <section id="programs" className="px-4 py-10 bg-primary-100">
        <h2 className="mb-8 text-3xl font-bold text-center">
          {t("our_programs")}
        </h2>

        <br />
        <div className="flex flex-col-reverse items-center max-w-5xl p-6 mx-auto bg-white rounded-lg sm:p-12 md:p-16 md:py-12 md:flex-row">
          <div className="md:w-1/2">
            <h3 className="mb-2 text-xl font-semibold">
              {t("program1_title")}
            </h3>
            <p>{t("program1_para1")}</p>

            <br />
            <p>{t("program1_para2")}</p>

            <br />
            <Button fill>
              {t("apply_now")}
              <FiExternalLink className="inline ml-1 text-base" />
            </Button>
          </div>
          <div className="relative flex items-center justify-center min-h-[250px] md:w-1/2">
            <img
              className="z-[1] sm:ml-24 max-w-60 xs:max-w-72"
              src={Symbol}
              alt="symbol"
            />
            <img
              className="absolute z-[5] max-w-60 xs:max-w-72"
              src={Group2}
              alt="program"
            />
          </div>
        </div>

        <br />
        <div className="flex flex-col items-center max-w-5xl p-6 mx-auto bg-white rounded-lg sm:p-12 md:p-16 md:py-12 md:flex-row">
          <div className="flex items-center justify-center md:w-1/2">
            <img
              className="z-[1] sm:mr-10 max-w-60 xs:max-w-72"
              src={Symbol}
              alt="symbol"
            />
            <img
              className="absolute sm:-translate-x-16 z-[5] max-w-60 xs:max-w-72"
              src={Group1}
              alt="program"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="mb-2 text-xl font-semibold">
              {t("program2_title")}
            </h3>
            <p>{t("program2_para1")}</p>

            <br />
            <p>{t("program2_para2")}</p>

            <br />
            <p>{t("program2_para3")}</p>

            <br />
            <Button fill>
              {t("apply_now")}
              <FiExternalLink className="inline ml-1 text-base" />
            </Button>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section id="our-team" className="px-4 py-16 overflow-hidden bg-white">
        <h2 className="mb-6 text-3xl font-bold text-center">{t("our_team")}</h2>

        <div className="w-full max-w-5xl mx-auto">
          <Carousel
            responsive={responsive}
            className="relative py-4 pb-20"
            itemClass="max-w-xs text-center min-w-max px-1.5"
            customButtonGroup={<ButtonGroup />}
            arrows={false}
            autoPlay
            autoPlaySpeed={5000}
            pauseOnHover
            // centerMode
            infinite={true}
          >
            {Array(8)
              .fill(0)
              .map((_, indx) => (
                <div
                  key={"member-" + indx}
                  className="p-4 border rounded-md shadow-xl shadow-gray-200"
                >
                  <img
                    className="mx-auto mb-3 rounded-full size-20"
                    src={`https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=${
                      190 + indx
                    }`}
                    alt="profile"
                  />
                  <h3 className="text-lg font-semibold">{t("ahmed_nasr")}</h3>
                  <p>{t("member_position")}</p>
                </div>
              ))}
          </Carousel>
        </div>
      </section>
      {/* Our Blog */}
      <section className="px-4 py-16 bg-gray-100">
        <h2 className="mb-6 text-3xl font-bold text-center">{t("blog")}</h2>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-3 mx-auto sm:gap-4 sm:grid-cols-2">
          {articles.slice(0, 3).map((article, indx) => (
            <ArticleCard key={article.id} {...article} isSpecial={indx === 0} />
          ))}
        </div>

        <div className="flex">
          <Button className="mx-auto mt-8" onClick={viewAllArticles}>
            {t("view_all_articles")}
          </Button>
        </div>
      </section>
    </Page>
  );
};

const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-3">
      <Button
        onClick={() => previous()}
        className="!rounded-full size-11 !text-center !text-lg"
      >
        <FaArrowLeft />
      </Button>
      <Button
        onClick={() => next()}
        className="!rounded-full size-11 !text-center !text-lg"
      >
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default Home;

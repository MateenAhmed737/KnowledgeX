import { useTranslation } from 'react-i18next';
import { Link, Navigate, useParams } from "react-router-dom";
import { Button, Page, RelatedArticleCard } from "../../components";
import { useMemo } from "react";
import { articles } from "../../constants/dummyData";
import { FiClock } from "react-icons/fi";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Carousel from "react-multi-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

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

const Article = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const article = useMemo(() => articles.find((e) => e.id == id), [id]);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <Page title={article.title}>
      <br /> <br />
      <div className="px-4">
        <div className="flex items-center justify-center mb-2 *:mr-1.5 text-sm text-primary-500">
          <FiClock />
          {new Date(article.published_at).toDateString()}
        </div>
        <h1 className="max-w-3xl mx-auto text-3xl font-bold text-center text-gray-800">
          {article.title}
        </h1>
        <br />
        <img
          className="w-full max-w-4xl mx-auto rounded-md"
          src="https://picsum.photos/500/200"
          alt="cover"
        />
        <div className="w-full max-w-3xl mx-auto mt-5">
          <article className="w-full space-y-6">
            <p>
              RIYADH: King Abdullah University of Science and Technology and
              Saudi health tech firm amplifAI health have joined forces to
              create an innovative diabetes detection system.
            </p>

            <p>
              The technique will merge amplifAI health’s artificial intelligence
              expertise with HyplexTM, the hyperspectral imaging technology
              developed by Andrea Fratalocchi, KAUST’s electrical engineering
              professor.
            </p>

            <p>
              The partnership will initially assess the combined technology as a
              way to detect and manage foot complications caused by diabetes. A
              clinical trial is planned.
            </p>

            <p>
              More than 500 million people currently live with diabetes with
              numbers expected to increase by over 100 million by 2030,
              according to KAUST. In Saudi Arabia, nearly 20 percent of the
              population is diabetic. The disease is the leading cause of lower
              limb amputations worldwide.
            </p>

            <img
              className="w-full max-w-4xl mx-auto rounded-md"
              src="https://picsum.photos/500/250"
              alt="cover"
            />

            <p>
              The new venture aims to detect diabetes early, which would lead to
              better treatment plans and significantly reduce the number of
              lower-limb amputations.
            </p>

            <p>
              “This effort could save Saudi Arabia more than SR2 billion ($533.3
              million) annually in medical costs and 1.5 million foot
              amputations worldwide every year, profoundly improving the quality
              of life of millions of people,” said Fratalocchi.
            </p>

            <p>
              HyplexTM is capable of gathering terabytes of data per second, far
              more than existing commercial cameras, which could be crucial to
              early disease detection.
            </p>

            <p>
              The collaboration marks the first application of KAUST technology
              to diabetes care and the agreement is an example of how combined
              Saudi technologies could improve diagnostics for a wide range of
              diseases. It also demonstrates how the KAUST Smart-Health
              Initiative is working to promote future healthcare in the Kingdom.
            </p>
          </article>
        </div>
        <br /> <br />
        <div className="w-full max-w-5xl mx-auto">
          <div className={`flex items-center justify-center py-5 space-x-8 border-y ${isArabic ? "flex-row-reverse space-x-reverse" : ""}`}>
            <span>{t("share_article")}</span>
            <div className="flex items-center space-x-2">
              <Link
                to="https://www.facebook.com"
                target="_blank"
                className="text-xl text-gray-700 hover:text-primary-500"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                to="https://www.youtube.com"
                target="_blank"
                className="text-xl text-gray-700 hover:text-primary-500"
              >
                <FaYoutube />
              </Link>
              <Link
                to="https://www.instagram.com"
                target="_blank"
                className="text-xl text-gray-700 hover:text-primary-500"
              >
                <BiLogoInstagramAlt />
              </Link>
              <Button
                className="bg-transparent !p-0 !text-lg ml-1 hover:text-primary-500"
                noStyling
              >
                <IoCopyOutline />
              </Button>
            </div>
          </div>
          <div className={`flex items-center justify-between w-full my-6 ${isArabic ? "flex-row-reverse" : ""}`}>
            <h3 className="text-base font-semibold">{t("related_articles")}</h3>
            <Link
              to="/blog"
              className="text-sm underline text-primary-500 hover:text-primary-600"
            >
              {t("view_all")}
            </Link>
          </div>
          <Carousel
            responsive={responsive}
            className="relative py-4 pb-20"
            itemClass="max-w-xs text-center min-w-max px-1.5 text-left"
            customButtonGroup={<ButtonGroup />}
            arrows={false}
            autoPlay
            autoPlaySpeed={5000}
            pauseOnHover
            // centerMode
            infinite={true}
          >
            {articles.map((e) => (
              <RelatedArticleCard key={e.id} {...e} />
            ))}
          </Carousel>
          <br /> <br />
        </div>
      </div>
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

export default Article;

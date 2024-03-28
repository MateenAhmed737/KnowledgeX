import { Button, Page } from "../components";
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

const Home = () => {
  return (
    <Page title="Home">
      <main className="w-full max-w-7xl mx-auto max-lg:relative text-center">
        {/* -- Background -- */}
        <img
          className="absolute max-lg:-top-28 lg:-top-4 opacity-70 -left-10 sm:-left-28 -z-10 object-cover w-1/2 max-w-96 select-none pointer-events-none"
          src={Symbol}
          alt="symbol"
        />
        <div className="fixed -right-40 md:-right-0 -top-32 rotate-12 -z-10 scale-150 size-96 md:scale-[3] bg-radial-gradient" />
        {/* -- Background -- */}
        <br /> <br /> <br /> <br />
        {/* Content */}
        <h1 className="font-bold capitalize px-2.5">
          The journey of <br /> knowledge into values
        </h1>
        <p className="my-6 max-w-xl mx-auto px-4">
          At Knowedgex, we are dedicated to fueling the next wave of innovation,
          supporting our nation&apos;s transition into a knowledge-based economy
          through our innovative programs.
        </p>
        <Button className="!py-3 !text-sm" fill>
          Let&apos;s get in touch
        </Button>
      </main>
      <br /> <br /> <br />
      {/* Our Mission */}
      <section className="text-center px-4">
        <h2 className="text-3xl font-bold">Our Mission</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-4 *:border-t *:border-t-primary-400 *:rounded-md *:px-2.5 *:py-4 *:shadow-xl *:max-w-[250px] *:mx-auto *:space-y-3 pt-8">
          <div>
            <img className="h-12 xs:h-10 mx-auto" src={Book} alt="book" />
            <p>Promotes knowledge-Based economy.</p>
          </div>
          <div>
            <img
              className="h-12 xs:h-10 mx-auto"
              src={GlobalSearch}
              alt="global search"
            />
            <p>Bridges research outcomes/patents and Markets</p>
          </div>
          <div>
            <img className="h-12 xs:h-10 mx-auto" src={SunFog} alt="sun fog" />
            <p>Support Saudi Arabia R&I ecosystem</p>
          </div>
          <div>
            <img className="h-12 xs:h-10 mx-auto" src={LampCharge} alt="lamp" />
            <p>Raise Saudi Arabia global innovation competitiveness.</p>
          </div>
        </div>
      </section>
      <br /> <br /> <br />
      <br />
      {/* Our Values */}
      <section className="text-center px-4">
        <h2 className="text-3xl mb-8 font-bold">Our Values</h2>

        <div className="max-w-6xl mx-auto sm:grid text-white sm:grid-cols-2 rounded-lg overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="bg-primary-500 flex items-center justify-center">
              Value
            </div>
            <img src={Frame3} alt="value" />
          </div>
          <div className="sm:grid grid-cols-2 flex flex-row-reverse">
            <div className="bg-primary-500 flex items-center justify-center max-sm:w-1/2">
              Learn
            </div>
            <img src={Frame7} alt="Learn" className="max-sm:w-1/2" />
          </div>
          <div className="grid grid-cols-2">
            <img src={Frame4} alt="Trust" />
            <div className="bg-gray-800 flex items-center justify-center">
              Trust
            </div>
          </div>
          <div className="sm:grid grid-cols-2 flex flex-row-reverse">
            <img src={Frame2} alt="Connect" className="max-sm:w-1/2" />
            <div className="bg-gray-800 flex items-center justify-center max-sm:w-1/2">
              Connect
            </div>
          </div>
        </div>
      </section>
      <br /> <br /> <br />
      <br />
      {/* Our Programs */}
      <section className="text-left p-4 pt-10 bg-primary-100">
        <h2 className="text-3xl text-center mb-8 font-bold">Our Programs</h2>

        <br />
        <div className="rounded-lg max-w-7xl mx-auto bg-white p-6 sm:p-16 pb-6 max-sm:pt-0 flex flex-col-reverse sm:flex-row items-center">
          <div className="sm:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Open Innovation Hub</h3>
            <p>
              Welcome to KX open-innovation hub, a dynamic ecosystem fostering
              knowledge sharing and collaboration, creativity, and
              entrepreneurship. We serve as a catalyst for innovation, bringing
              together diverse stakeholders from academia and industry to
              co-create solutions that improve people’s lives.
            </p>

            <br />
            <p>
              So, if you are industry innovator or a corporate innovation leader
              passionate about R&I projects
            </p>

            <br />
            <Button fill>
              Apply Now
              <FiExternalLink className="inline ml-1 text-base" />
            </Button>
          </div>
          <div className="flex items-center justify-center sm:w-1/2">
              {/* <img className="z-[10]" src={Symbol} alt="symbol" /> */}
              <img
                // className="absolute z-[1] top-10 right-20"
                src={Group2}
                alt="program"
              />
          </div>
        </div>

        <br />
        <div className="rounded-lg max-w-7xl mx-auto bg-white p-16 pb-6 max-sm:pt-20 flex flex-col max-sm:space-y-10 sm:flex-row items-center">
          <div className="flex items-center justify-center sm:w-1/2">
            <div className="relative">
              <img className="z-[10]" src={Symbol} alt="symbol" />
              <img
                className="absolute z-[1] top-10 right-20"
                src={Group1}
                alt="program"
              />
            </div>
          </div>
          <div className="sm:w-1/2">
            <h3 className="text-xl font-semibold mb-2">KX Cofactors</h3>
            <p>
              Knowledgex Cofactors program, where the future of research and
              innovation takes flight!
            </p>

            <br />
            <p>
              The program is specifically designed for those passionate about
              pushing the boundaries of knowledge into startups. Whether
              you&apos;re a visionary entrepreneur or a dedicated researcher,
              our hybrid Pre-accelerator offers a unique three-month journey
              aimed at assisting you in team building to transform advanced
              research/IPs into MVPs.
            </p>

            <br />
            <p>Our next cohort is open now for application.</p>

            <br />
            <Button fill>
              Apply Now
              <FiExternalLink className="inline ml-1 text-base" />
            </Button>
          </div>
        </div>
      </section>

      <br />
      <br />

    </Page>
  );
};

export default Home;

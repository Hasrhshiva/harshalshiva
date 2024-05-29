import React from "react";
import heroImg from "../../assets/images/profile-img.png";
import CountUp from "react-countup";
import resume from "../../assets/documents/harshalh.pdf";
const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm-flex-col md:flex-row">
          {/*=======hero left Content start ====== */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Harshal H <br /> Software Engineer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line"></i> Hire Me
                </button>
              </a>
              <a
                href={resume} target="_blank" rel="noreferrer"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Resume
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              Hello! I'm a passionate Software Engineer specializing in both backend and frontend web development. With a solid foundation in the latest technologies, I create dynamic, user-friendly, and high-performance web applications.
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow Me:
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-youtube-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/Hasrhshiva" target="_blank" rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/harshal-h-b28a33284/" target="_blank" rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                 <i class="ri-linkedin-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/*=======hero left Content end ====== */}

          {/*=======hero img ====== */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex  items-center justify-center">
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/*=======hero img end ====== */}

          {/*=======hero content right ====== */}
          <div
            className="md:basis-1/5 flex 
                    justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 
                    md:flex-col md:justify-end md:text-end"
          >
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={2} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years Of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={150} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happy Clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={249} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                projects Completed
              </h4>
            </div>
          </div>
          {/*=======hero content right end ====== */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

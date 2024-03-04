import React from "react";
import bannerImg from "../../assets/ABOUT/bannerImg.png";
import img from "../../assets/ABOUT/img.png";
import Icon1 from "../../assets/about_us/Icon1.png";
import Icon2 from "../../assets/about_us/Icon2.png";
import Button from "../../components/ui/button";
import BtnIcon from "../../assets/header/btnIcon";
import img2 from "../../assets/ABOUT/Photo.jpeg";
import Icon3 from "../../assets/ABOUT/icon3";
import { marketData } from "../../components/market/market-data";
import MarketMain from "../../components/market/market-main";
import UserMain from "../../components/user/user-main";
import { userData } from "../../components/user/user-data";
import OfferMain from "../../components/offer/offer-main";
import { offerData } from "../../components/offer/offer-data";
const About = () => {
  return (
    <div>
      <section>
        <div className="relative mb-[70px]">
          <img src={bannerImg} alt="" />
          <h2 className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-h1 text-primary">
            About
          </h2>
        </div>
      </section>
      <section className="container flex items-center justify-center pb-[50px]">
        <div>
          <img src={img} alt="img" />
        </div>
        <div className="w-[750px]">
          <h4 className="font-display text-h4 text-[#68A47F]">About Us</h4>
          <h2 className="text-h2 text-primary mt-2 mb-2">
            We do Creative Things for Success
          </h2>
          <p className="text-Paragraph text-TextP">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley. <br /> <br /> Simply
            dummy text of the printing and typesetting industry. Lorem had
            ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="mb-[60px] flex justify-between ">
            <div className="flex items-center gap-[15px]">
              <img src={Icon1} alt="" />
              <h2 className="text-btn2 text-primary">
                Modern Agriculture Equipment
              </h2>
            </div>
            <div className="flex items-center gap-[15px]">
              <img src={Icon2} alt="" />
              <h2 className="text-btn2 text-primary">
                No growth hormones are used
              </h2>
            </div>
          </div>
          <Button variant="primary">
            <span className="flex items-center gap-1">
              <p className="text-headerList text-white ">Explore Now </p>{" "}
              <span>
                <BtnIcon />
              </span>{" "}
            </span>{" "}
          </Button>
        </div>
      </section>
      <section className="  bg-BgColor py-[190px] ">
        <div className="container flex gap-[51px] mb-[91px]">
          <div className="w-[630px]">
            <h4 className="font-display text-h4 text-[#68A47F]">
              Why Choose us?
            </h4>
            <h2 className="text-h2 text-primary mt-2 mb-2">
              We do not buy from the open market & traders.
            </h2>
            <p className="text-Paragraph text-TextP mt-[25px] mb-[36px] ">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <div className="flex gap-[10px] items-center py-[31px] px-[27px] w-[335px] bg-Btn1 rounded-full mb-3 mt-[36px]">
              <Icon3 />
              <h2 className="text-headerList2 text-primary">
                100% Natural Product
              </h2>
            </div>
            <p className="text-new text-primary ml-[60px] mr-[110px]">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
            <div className="flex gap-[10px] items-center py-[31px] px-[27px] w-[335px] bg-Btn1 rounded-full mb-3 mt-[36px]">
              <Icon3 />
              <h2 className="text-headerList2 text-primary">
                Increases resistance
              </h2>
            </div>
            <p className="text-new text-primary ml-[60px] mr-[110px]">
              Filling, and temptingly healthy, our Biona Organic Granola with
              Wild Berries is just the thing
            </p>
          </div>
          <div>
            <img className="rounded-3xl	" src={img2} alt="img" />
          </div>
        </div>
        <div className="flex gap-[30px] justify-center">
          {marketData.map((item) => (
            <MarketMain key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section className="container flex flex-col items-center pt-[180px] pb-[200px]">
        <div className="w-[850px] text-center">
          <h4 className="font-display text-h4 text-[#68A47F]">Team</h4>
          <h2 className="text-h2 text-primary mt-2 mb-2">
            Our Organic Experts
          </h2>
          <p className="text-Paragraph text-TextP mt-[25px] mb-[36px] ">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className="flex gap-[30px]">
          {userData.map((item) => (
            <UserMain key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section className="container bg-primary py-[188px] px-[188px] mb-[141px]">
        <div>
          <h4 className=" text-center font-display text-h4 text-[#68A47F]">
            About Us
          </h4>
          <h2 className=" text-center text-h2 text-white mt-2 mb-2">
            What We Offer for You
          </h2>
        </div>
        <div className="flex gap-[21px] mt-[33px] ">
          {offerData.map((item) => (
            <OfferMain key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

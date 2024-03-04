import React from "react";
import { cardData } from "../../components/card/card-data";
import CardMain from "../../components/card/card-main";
import img from "../../assets/about_us/img.png";
import Icon1 from "../../assets/homeAbout/Icon1.png";
import Icon2 from "../../assets/homeAbout/Icon2.png";
import Button from "../../components/ui/button";
import BtnIcon from "../../assets/header/btnIcon";
import { productData1 } from "../../components/Products/Produc-data";
import ProductMain from "../../components/Products/Product-main";
import bg from "../../assets/Customer/bg.jpg";
import Customerimg from "../../assets/Customer/img.png";
import StartIcon from "../../assets/Customer/start_icon";
import { customerData } from "../../components/customer/customer-data";
import CustomerMain from "../../components/customer/customer-main";
import { productData2 } from "../../components/Products/Produc-data";
import friendlyimg from "../../assets/frienfly/img.png";
import { contentData } from "../../components/content/content-data";
import ContentMain from "../../components/content/content-main";
import NewsMain from "../../components/News/news-main";
import { newsData } from "../../components/News/news-data";
import homeBanner from "../../assets/header/homeBanner.png";

export const Home = () => {
  return (
    <div>
        <section>
          <div className="relative">
            <img className="w-[100%]" src={homeBanner} alt="" />
            <div className="container w-[550px] absolute top-[180px] left-[180px]">
              <h4 className="font-display text-h4 text-[#68A47F]">
                100% Natural Food
              </h4>
              <h1 className="text-h1 text-primary mt-2 mb-4 ">
                Choose the best healthier way of life
              </h1>
              <Button variant="secondary">
                <span className="flex items-center gap-1">
                  <p className="text-headerList text-primary ">Explore Now </p>{" "}
                  <span>
                    <BtnIcon />
                  </span>{" "}
                </span>{" "}
              </Button>
            </div>
          </div>
        </section>
        <section className="container mt-[80px] mb-[80px]">
          <div className="flex justify-center gap-8">
            {cardData.map((item) => (
              <CardMain key={item.id} {...item} />
            ))}
          </div>
        </section>
        <section className=" bg-BgColor py-10">
          <div className="container flex  items-center">
            <div>
              <img src={img} alt="" />
            </div>
            <div className="w-[644px]">
              <h4 className="font-display text-h4 text-[#68A47F]">About Us</h4>
              <h2 className="text-h2 text-primary mt-2 mb-2">
                We Believe in Working Accredited Farmers
              </h2>
              <p className="text-Paragraph text-TextP">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <ul className="mt-[50px] w-[500px]">
                <li className="flex mb-[25px] gap-3">
                  <img src={Icon1} alt="" />
                  <span>
                    <h5 className="text-h6 text-primary mb-2">
                      Organic Foods Only
                    </h5>
                    <p className="text-Paragraph text-TextP">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </span>
                </li>
                <li className="flex gap-3 mb-[45px]">
                  <img src={Icon2} alt="" />
                  <span>
                    <h5 className="text-h6 text-primary mb-2">
                      Quality Standards
                    </h5>
                    <p className="text-Paragraph text-TextP">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </span>
                </li>
              </ul>
              <Button variant="primary">
                <span className="flex items-center gap-1">
                  <p className="text-headerList text-white ">Explore Now </p>{" "}
                  <span>
                    <BtnIcon />
                  </span>{" "}
                </span>{" "}
              </Button>
            </div>
          </div>
        </section>
        <section className="container mt-[60px] mb-[60px] flex flex-col justify-center  items-center">
          <div className="flex flex-col justify-center mb-[60px]">
            <h4 className="font-display text-h4 text-[#68A47F] text-center">
              Categories{" "}
            </h4>
            <h2 className="text-h2 text-primary text-center mb-[30px]">
              Our Products
            </h2>
            <div className="grid grid-cols-4 gap-y-5 gap-x-5   ">
              {productData1.map((item) => (
                <ProductMain key={item.id} {...item} />
              ))}
            </div>
          </div>
          <Button variant="primary">
            <span className="flex items-center gap-1">
              <p className="text-headerList text-white ">Load More</p>{" "}
              <span>
                <BtnIcon />
              </span>{" "}
            </span>{" "}
          </Button>
        </section>
        <section>
          <div className="relative">
            <img src={bg} alt="" />
            <div className="flex flex-col items-center absolute top-[120px] left-[50%] translate-x-[-50%]">
              <h4 className="font-display text-h4 text-[#68A47F] text-center">
                Categories
              </h4>
              <h2 className="text-h2 text-primary text-center mb-[30px]">
                What Our Customer Saying?
              </h2>
              <img className="mt-[20px] mb-[20px]" src={Customerimg} alt="" />
              <StartIcon />

              <p className=" w-[730px] text-Paragraph text-TextP text-center mt-[20px] mb-[20px] ">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <h6 className="text-h6 text-primary">Sara Taylor</h6>
              <p className="text-Paragraph text-TextP">Consumer</p>
              <div className="flex gap-2 mt-2 mb-[30px]">
                <div className="w-2 h-2 rounded-full bg-Btn1"></div>
                <div className="w-2 h-2 rounded-full bg-green"></div>
                <div className="w-2 h-2 rounded-full bg-Btn1"></div>
              </div>
              <div className="border-2 w-[60%]"></div>
              <div className="mt-[50px]">
                <div className="flex gap-[30px]">
                  {customerData.map((item) => (
                    <CustomerMain key={item.id} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary py-[200px]">
          <div className="container flex justify-between items-center">
            <div>
              <h4 className="font-display text-h4 text-[#68A47F] ">Offer</h4>
              <h2 className="text-h2 text-white">We Offer Organic For You</h2>
            </div>
            <Button variant="secondary">
              <span className="flex items-center gap-1">
                <p className="text-headerList text-primary ">
                  View All Product
                </p>{" "}
                <span>
                  <BtnIcon />
                </span>{" "}
              </span>{" "}
            </Button>
          </div>
          <div className="container grid grid-cols-4 mt-[50px]">
            {productData2.map((item) => (
              <ProductMain key={item.id} {...item} />
            ))}
          </div>
        </section>
        <section className="relative">
          <div>
            <img className="w-[50%]" src={friendlyimg} alt="img" />
          </div>
          <div className="absolute py-[50px] px-[60px] rounded-[40px] left-[43%]  top-[50%] translate-y-[-50%] bg-white w-[822px]">
            <h4 className="font-display text-h4 text-[#68A47F] ">
              Eco Friendly
            </h4>
            <h2 className="text-h2 text-primary  mb-[35px] w-[600px] ">
              Econis is a Friendly Organic Store
            </h2>
            <ul className="mt-[50px] w-[635px]">
              <li className="flex mt-[25px] gap-3">
                <span>
                  <h5 className="text-h6 text-primary mb-2">
                    Start with Our Company First
                  </h5>
                  <p className="text-Paragraph text-TextP">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </span>
              </li>
              <li className="flex gap-3 mt-[25px]">
                <span>
                  <h5 className="text-h6 text-primary mb-2">
                    Learn How to Grow Yourself
                  </h5>
                  <p className="text-Paragraph text-TextP">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </span>
              </li>
              <li className="flex gap-3 mt-[25px]">
                <span>
                  <h5 className="text-h6 text-primary mb-2">
                    Farming Strategies of Today
                  </h5>
                  <p className="text-Paragraph text-TextP">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className="grid grid-cols-3 gap-10 py-[180px] bg-btn3">
          {contentData.map((item) => (
            <ContentMain key={item.id} {...item} />
          ))}
        </section>
        <section className="py-[180px] container">
          <div className="container flex justify-between items-center">
            <div>
              <h4 className="font-display text-h4 text-[#68A47F] ">News</h4>
              <h2 className="text-h2 text-primary w-[800px]">
                Discover weekly content about organic food, & more
              </h2>
            </div>
            <Button variant="primary4">
              <span className="flex items-center gap-1 ">
                <p className="text-headerList text-primary ">Load More</p>{" "}
                <span>
                  <BtnIcon />
                </span>{" "}
              </span>{" "}
            </Button>
          </div>
          <div className="flex justify-between mt-[50px]">
            {newsData.map((item) => (
              <NewsMain key={item.id} {...item} />
            ))}
          </div>
        </section>
    </div>
  );
};

export default Home;

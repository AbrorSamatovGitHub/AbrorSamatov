import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../components/Products/Produc-data";
import banner from "../../assets/SHOPSINGLE/banner.png";
import Button from "../../components/ui/button";
import Icon from "../../assets/product/icon";
import BtnIcon from "../../assets/header/btnIcon";
import ProductMain from "../../components/Products/Product-main";
import { Link } from "react-router-dom";
import useScrollTop from "../../components/hooks/useScrollTop";
const ShopSingle = () => {
  const params = useParams();
  console.log(params);
  const result = productData.find((item) => item.id == params.slug);
  console.log(result);
  useScrollTop()
  return (
    <div>
      <section>
        <div>
          <div className="relative mb-[70px]">
            <img src={banner} alt="" />
            <h2 className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-h1 text-primary">
              Shop Single
            </h2>
          </div>
          <section className=" container flex items-center">
            <div className=" relative container w-[550px] h-[550px]  bg-BgColor p-6 rounded-[25px] flex justify-center items-center">
              <div className="absolute top-6 left-6">
                <Button variant="primary2">{result.btn}</Button>
              </div>
              <img className="w-[400px]" src={result.img} alt="" />
            </div>
            <div className="w-[620px]">
              <h3 className="text-cart1 text-primary mb-2">{result.title}</h3>
              <Icon />
              <div className="flex gap-2 mt-3 mb-8 items-center">
                <h4 className=" text-Btn1 line-through text-cart2">
                  {result.sum1}
                </h4>
                <h4 className="text-cart3 text-primary">{result.sum2}</h4>
              </div>
              <p className="text-new4 text-textP2 mb-[35px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <div className="flex items-center gap-[20px]">
                <h3 className="text-headerList text-primary"> Quantity :</h3>
                <div className="border-2 border-primary inline-block py-[28px] px-[60px] rounded-[18px]">
                  <span className="text-headerList text-primary">1</span>
                </div>
                <Button variant="primary">
                  <span className="flex items-center gap-1 m-3">
                    <p className="text-headerList text-white ">Explore Now </p>{" "}
                    <span>
                      <BtnIcon />
                    </span>{" "}
                  </span>{" "}
                </Button>
              </div>
            </div>
          </section>
          <section className="container pt-[90px] pb-[140px] ">
            <div className="flex flex-col justify-center items-center gap-[30px]">
              <div className="flex gap-4">
                <Button variant="primary5">Product Description</Button>
                <Button variant="primary6"> <p className="text-primary">Additional Info</p>  </Button>
              </div>
              <p className="max-w-[1100px] text-center text-new4 text-textP2">
                Welcome to the world of natural and organic. Here you can
                discover the bounty of nature. We have grown on the principles
                of health, ecology, and care. We aim to give our customers a
                healthy chemical-free meal for perfect nutrition. It offers
                about 8–10% carbs. Simple sugars — such as glucose and fructose
                — make up 70% and 80% of the carbs in raw.
              </p>
            </div>
            <div className="pt-[140px] ">
              <h2 className="text-center text-h2 text-primary mb-[40px]">Related Products</h2>
              <div className=" container grid grid-cols-4 gap-y-5 ">
                {productData.map((item) => (
                  <Link key={item.id} to={`/ShopSingle/${item.id}`}>
                    <ProductMain key={item.id} {...item} />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ShopSingle;

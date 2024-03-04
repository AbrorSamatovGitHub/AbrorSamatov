import React from "react";
import bannerImg from "../../assets/SHOP/bannerimg.png";
import { productData } from "../../components/Products/Produc-data";
import ProductMain from "../../components/Products/Product-main";
import { Link } from "react-router-dom";
const Shop = () => {
  return (
    <div>
      <section className="pb-[140px]">
        <div className="relative mb-[70px]">
          <img src={bannerImg} alt="img" />
          <h2 className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-h1 text-primary">
            Shop
          </h2>
        </div>
        <div className="container  flex flex-col justify-center  items-center">
          <div className=" container grid grid-cols-4 gap-y-5 ">
            {productData.map((item) => (
              <Link key={item.id} to={`/ShopSingle/${item.id}`}>
                <ProductMain  {...item} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

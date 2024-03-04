import img from "../../assets/footer/img.png";
import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import Icon from "../../assets/footer/icon";
import Icon2 from "../../assets/footer/icon2";
export const Footer = () => {
  return (
    <div>
      <div className="container mb-[117px]">
        <div className="relative">
          <img src={img} alt="img" />
          <div className="absolute top-[105px] left-[50%] translate-x-[-50%] flex justify-between items-center w-[1250px]">
            <h2 className="  text-h2 text-white w-[350px]">
              {" "}
              Subscribe to our Newsletter
            </h2>
            <form className="flex gap-[6px] items-center">
              <Input variant="footerInput" placeholder="Your Email Address" />
              <Button variant="primary5">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-[120px] flex gap-[50px] justify-center">
          <div className="w-[250px] text-right ">
            <h3 className="text-h5 text-primary mb-8">Contact Us</h3>
            <ul>
              <li className="mb-3">
                <h4 className="text-List text-primary mb-1">Email</h4>
                <p className="text-Paragraph text-primary">
                  needhelp@Organia.com
                </p>
              </li>
              <li>
                <h4 className="text-List text-primary mb-1"> Phone</h4>
                <p className="text-Paragraph text-primary">666 888 888</p>
              </li>
              <li>
                <h4 className="text-List text-primary mb-1">Address</h4>
                <p className="text-Paragraph text-primary">
                  88 road, borklyn street, USA
                </p>
              </li>
            </ul>
          </div>
          <div className="w-[560px] px-[40px] border-l-[3px] border-r-[3px] flex flex-col items-center text-center">
            <h3 className="text-h3 text-primary mb-8 flex gap-2 items-center">
              {" "}
              <Icon /> Organick
            </h3>
            <p className="mb-[50px] text-Paragraph text-primary">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing{" "}
            </p>
            <Icon2 />
          </div>
          <div className="w-[250px]  ">
            <h3 className="text-h5 text-primary mb-8">Utility Pages</h3>

            <ul>
              <li className="mb-3">
                <p className="text-Paragraph text-primary">Style Guide</p>
              </li>
              <li>
                <p className="text-Paragraph text-primary">404 Not Found</p>
              </li>
              <li>
                <p className="text-Paragraph text-primary">
                  Password Protected
                </p>
              </li>
              <li className="mb-3">
                <p className="text-Paragraph text-primary">Licences</p>
              </li>
              <li>
                <p className="text-Paragraph text-primary">Changelog</p>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="border border-primary mb-[20px]"></div>
      <div className="text-center">
        <p className="text-new text-primary mb-[16px]">
          Copyright © <span className="text-new2">Organick</span> | Designed by <span className="text-new2">VictorFlow</span> Templates - Powered by <span className="text-new2">Webflow</span>
          
        </p>
      </div>
    </div>
  );
};

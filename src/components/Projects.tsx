import RiseUp from "../assets/riseup.png";
import Nftexo from "../assets/nftexo.png";
import JigitShop from "../assets/jigit-shop.png";
import Pizza from "../assets/pizza.png";

type Props = {};

const Projects = ({}: Props) => {
  return (
    <div id='projects' className="min-h-[100vh] mt-48 flex flex-col gap-24 justify-center items-center">
      <div className="max-w-[95%] md:max-w-[70%] m-auto overflow-hidden">
        <a href="https://riseup-crypto.netlify.app/" target="_blanck" className="overflow-hidden">
          <img
            src={RiseUp}
            alt="riseup-website"
            className="hover:scale-[1.1] duration-500"
          />
        </a>
        <h1 className="mt-10 text-center text-3xl font-bold text-[#DEDEDD]">RiseUp</h1>
      </div>
      <div className="max-w-[95%] md:max-w-[70%] m-auto overflow-hidden">
        <a href="https://nftexo.netlify.app/" target="_blanck" className="overflow-hidden">
          <img
            src={Nftexo}
            alt="riseup-website"
            className="hover:scale-[1.1] duration-500"
          />
        </a>
        <h1 className="mt-10 text-center text-3xl font-bold text-[#DEDEDD]">Nftexo</h1>
      </div>
      <div className="max-w-[95%] md:max-w-[70%] m-auto overflow-hidden">
        <a href="https://jigit-shop.vercel.app/" target="_blanck" className="overflow-hidden">
          <img
            src={JigitShop}
            alt="riseup-website"
            className="hover:scale-[1.1] duration-500"
          />
        </a>
        <h1 className="mt-10 text-center text-3xl font-bold text-[#DEDEDD]">JIGIT</h1>
      </div>
      <div className="max-w-[95%] md:max-w-[70%] m-auto overflow-hidden">
        <a href="https://pizza-app-rho.vercel.app/" target="_blanck" className="overflow-hidden">
          <img
            src={Pizza}
            alt="riseup-website"
            className="hover:scale-[1.1] duration-500"
          />
        </a>
        <h1 className="mt-10 text-center text-3xl font-bold text-[#DEDEDD]">Pizza</h1>
      </div>
    </div>
  );
};

export default Projects;

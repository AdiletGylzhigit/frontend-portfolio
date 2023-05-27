import { FiLinkedin } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
type Props = {};

const Footer = ({}: Props) => {
  return (
    <div>
      <div className="fixed bottom-0 left-0">
        <a href="https://www.linkedin.com/in/adilet-gylzhigit-a06489246" target="_blank">
          <FiLinkedin size={30} className="text-white m-5 cursor-pointer" />
        </a>
        <a href="https://github.com/AdiletGylzhigit" target="_blank">
          <TbBrandGithub size={30} className="text-white m-5 cursor-pointer" />
        </a>
      </div>
      <div className="fixed bottom-14 right-0">
        <h3 className="rotate-90 uppercase text-white text-xl">Home -----</h3>
      </div>
    </div>
  );
};

export default Footer;

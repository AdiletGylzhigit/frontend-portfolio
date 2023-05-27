import Logo from "../assets/logo.png";

type Props = {};

const Header = ({}: Props) => {
  return (
    <div className="fixed z-10 w-full flex justify-between items-center p-5">
      <img src={Logo} alt="logo" />
      <div className="flex gap-10 text-lg font-600 text-white cursor-pointer uppercase">
        <p><a href='#skills'>Skills</a></p>
        <p><a href='#projects'>Projects</a></p>
        <p><a href='#contact'>Contact</a></p>
      </div>
    </div>
  );
};

export default Header;

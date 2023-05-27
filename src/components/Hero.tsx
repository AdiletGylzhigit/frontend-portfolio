type Props = {};

const Hero = ({}: Props) => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center px-2 md:px-0">
      <div>
        <p className="text-xl text-[#646464]">I AM</p>
        <h1 className="text-6xl text-[#DEDEDD] font-bold">ADILET <span className="text-[#909057]">GYLZHIGIT</span></h1>
        <p className="mt-5 text-xl text-right text-[#646464]">A FONTEND DEVELOPER</p>
      </div>
    </div>
  );
};

export default Hero;

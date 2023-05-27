import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReactImg from "../assets/icons8-react-480.png";
import JSImg from "../assets/icons8-javascript-480.png";
import CSSImg from "../assets/icons8-css-480.png";
import HTMLImg from "../assets/HTML.png";
import SassImg from "../assets/sass.png";
import MongoImg from "../assets/mongo.png";
import SQLImg from "../assets/sql.png";
import RestAPIImg from "../assets/restapi.png";
import GraphQLImg from "../assets/graphql.png";
import GithubImg from "../assets/github.png";
import NextJSImg from "../assets/nextjs.png";
import TailwindCSSImg from "../assets/tailwindcss.png";

type Props = {};

const Skills = ({}: Props) => {
  return (
    <div id='skills' className="max-h-[100vh]">
      <Carousel dynamicHeight={true}>
        <div className="w-max m-auto">
          <img src={ReactImg} />
        </div>
        <div className="w-max m-auto">
          <img src={JSImg} />
        </div>
        <div className="w-max m-auto">
          <img src={CSSImg} />
        </div>
        <div className="w-max m-auto">
          <img src={HTMLImg} />
        </div>
        <div className="w-max m-auto">
          <img src={SassImg} />
        </div>
        <div className="w-max m-auto">
          <img src={MongoImg} />
        </div>
        <div className="w-max m-auto">
          <img src={SQLImg} />
        </div>
        <div className="w-max m-auto">
          <img src={RestAPIImg} />
        </div>
        <div className="w-max m-auto">
          <img src={GraphQLImg} />
        </div>
        <div className="w-max m-auto">
          <img src={GithubImg} />
        </div>
        <div className="w-max m-auto">
          <img src={NextJSImg} />
        </div>
        <div className="w-max m-auto">
          <img src={TailwindCSSImg} />
        </div>
      </Carousel>
    </div>
  );
};

export default Skills;

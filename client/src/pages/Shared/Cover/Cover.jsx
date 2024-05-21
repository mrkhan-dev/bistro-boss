import {Parallax} from "react-parallax";
const Cover = ({img, title, para}) => {
  return (
    <Parallax
      blur={{min: -50, max: 50}}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[700px] mt-12">
        {/* <div className="hero-overlay "></div> */}
        <div className="hero-content text-center text-neutral-content">
          <div className="  lg:w-[1320px] lg:h-[450px] py-36 bg-[#15151599]">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 text-2xl font-medium px-40">{para}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;

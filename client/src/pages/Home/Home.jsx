import {Helmet} from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMuen/PopularMenu";
import Testimonials from "./Testimoials/Testimonials";
import Cover from "../Shared/Cover/Cover";
import chefServices from "../../assets/home/chef-service.jpg";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BistroBoss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <div className="w-9/12 mx-auto h-[700px] mb-24">
        <Cover
          img={chefServices}
          title={"bistro boss"}
          para={
            "Rapidiously conceptualize ethical best practices vis-a-vis business process improvements. Objectively engage cost effective e-business through flexible portals."
          }
        />
      </div>
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;

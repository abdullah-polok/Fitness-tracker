import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import FeatureClasses from "../FeaturedClasses/FeatureClasses";
import FeacturedSection from "../FeaturedSection/FeacturedSection";
import Newsletter from "../Newletter/Newsletter";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FitnessTraker | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeacturedSection></FeacturedSection>
            <FeatureClasses></FeatureClasses>
            <About></About>
            <Blogs></Blogs>
            <Newsletter></Newsletter>
            <Team></Team>
        </div>
    );
};

export default Home;
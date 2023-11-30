import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import FeatureClasses from "../FeaturedClasses/FeatureClasses";
import FeacturedSection from "../FeaturedSection/FeacturedSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeacturedSection></FeacturedSection>
            <FeatureClasses></FeatureClasses>
            <About></About>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;
import About from "../About/About";
import Banner from "../Banner/Banner";
import FeatureClasses from "../FeaturedClasses/FeatureClasses";
import FeacturedSection from "../FeaturedSection/FeacturedSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeacturedSection></FeacturedSection>
            <FeatureClasses></FeatureClasses>
            <About></About>
        </div>
    );
};

export default Home;
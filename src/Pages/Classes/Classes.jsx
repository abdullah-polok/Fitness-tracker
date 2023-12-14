import { Helmet } from "react-helmet-async";
import AllClasses from "./AllClasses";
import WeeklySection from "./WeeklySection";

const Classes = () => {
    return (
        <div>
            <Helmet>FitnessTraker | Classes</Helmet>
            <WeeklySection></WeeklySection>
            <AllClasses></AllClasses>
        </div>
    );
};

export default Classes;
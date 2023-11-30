import { useEffect, useState } from "react";
import EachClass from "./EachClass";

const AllClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch(`https://assignment-12-server-one-psi.vercel.app/classes`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className="mt-5">
            <h3 className="text-3xl text-primary font-semibold mt-4 border-b-8 border-primary">All Class Section</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    classes.map(classy => <EachClass key={classy._id} classy={classy}></EachClass>)
                }
            </div>
        </div>
    );
};

export default AllClasses;
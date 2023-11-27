import { useEffect, useState } from "react";
import EachTrainer from "./EachTrainer";

const Trainer = () => {
    const [trainer, setTrainer] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/trainers')
            .then(res => res.json())
            .then(data => setTrainer(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                trainer.map(train => <EachTrainer key={train._id} train={train}></EachTrainer>)
            }
        </div>
    );
};

export default Trainer;
import { useEffect, useState } from "react";
import EachTrainer from "../../Trainer/EachTrainer";
const Team = () => {
    const [trainer, setTrainer] = useState([])
    useEffect(() => {
        fetch('https://assignment-12-server-one-psi.vercel.app/trainers')
            .then(res => res.json())
            .then(data => setTrainer(data))
    }, [])
    return (
        <div className="mt-24">
            <div><h3 className="text-3xl text-primary font-semibold mt-4 border-b-8 border-primary">Team</h3></div>
            <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    trainer.slice(0, 3).map(train => <EachTrainer key={train._id} train={train}></EachTrainer>)
                }
            </div>
        </div>
    );
};

export default Team;
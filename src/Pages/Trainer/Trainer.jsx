import { useEffect, useState } from "react";
import EachTrainer from "./EachTrainer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Trainer = () => {
    const [trainer, setTrainer] = useState([])
    useEffect(() => {
        fetch('https://assignment-12-server-one-psi.vercel.app/trainers')
            .then(res => res.json())
            .then(data => setTrainer(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>FitnessTraker | Trainer</title>
            </Helmet>
            <div>
                <h3 className="text-3xl text-primary font-semibold mt-4 border-b-8 border-primary">Choose Your Trainer</h3>
                <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        trainer.map(train => <EachTrainer key={train._id} train={train}></EachTrainer>)
                    }
                </div>
            </div>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(../../../../assets/images/banner/premium_photo-1664301032470-33cc8c207f7f.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">It’s your workout. You can cry if you want to.</h1>
                            <p className="mb-5">For some people, going to the gym and staying committed to their fitness routine comes naturally, like sleeping and eating. For such people, remaining committed to their workout routine is an important part of their life.</p>
                            <Link to={'/becometrainer'}><button className='btn btn-primary lg:btn-lg text-xl font-bold uppercase'>Become a trainer</button></Link>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5'>

                </div>
            </div>
        </div>
    );
};

export default Trainer;
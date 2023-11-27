import { Link } from 'react-router-dom'
const EachTrainer = ({ train }) => {
    const { _id, trainer_name, profile_image, years_of_experience, social_icons } = train
    return (
        <div className="card w-64 bg-base-100 shadow-xl">
            <figure><img className="w-full" src={profile_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {
                        trainer_name
                    }
                </h2>
                <p>Years of Experience: {years_of_experience}</p>
                <div className="flex justify-between ">
                    <div>
                        <Link to={`/trainerdetails/${_id}`}><button className="btn btn-outline btn-primary">Know more</button></Link>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge   border-2 rounded-lg p-1  border-primary">{social_icons[0]}</div>
                        <div className="badge   border-2 rounded-lg p-1  border-primary">{social_icons[1]}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachTrainer;
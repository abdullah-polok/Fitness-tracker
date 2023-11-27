import { useLoaderData } from 'react-router';
const TrainerDetails = () => {
    const trainer = useLoaderData()
    const { trainer_name, profile_image, years_of_experience, social_icons, available_time } = trainer
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={profile_image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{trainer_name}</h2>
                <p>{years_of_experience}</p>
                <p>{available_time}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div> */}
            </div>
        </div>
    );
};

export default TrainerDetails;
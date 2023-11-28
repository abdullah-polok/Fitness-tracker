import { Link } from 'react-router-dom'
const EachTrainer = ({ train }) => {
    const { _id, trainer_name, profile_image, available_time, years_of_experience, social_icons } = train
    // console.log(train)
    return (
        <div className="card w-64 bg-base-100 shadow-xl">
            <figure><img className="w-64 h-64" src={profile_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {
                        trainer_name
                    }
                </h2>
                <p>Years of Experience: {years_of_experience}</p>
                <p>Available Time :<Link to={'/trainerbook'} className='text-primary'>{available_time}</Link></p>
                <div className="flex justify-between ">
                    <div>
                        <Link to={`/trainerdetails/${_id}`}><button className="btn btn-outline btn-primary">Know more</button></Link>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge   border-2 rounded-lg p-1  border-primary">{social_icons ? social_icons[0] : 'no social media'}</div>
                        <div className="badge   border-2 rounded-lg p-1  border-primary">{social_icons ? social_icons[1] : 'no social media'}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachTrainer;
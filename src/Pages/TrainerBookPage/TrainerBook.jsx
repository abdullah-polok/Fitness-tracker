import bronz from '../../assets/images/types/bronz.png'
import silver from '../../assets/images/types/silver.png'
import gold from '../../assets/images/types/gold.png'

const TrainerBook = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-5">
            <div className="card w-80 bg-orange-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center flex justify-center">Bronz</h2>
                    <img src={bronz} alt="" />
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline outline-orange-400">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-gray-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center flex justify-center">Silver</h2>
                    <img src={silver} alt="" />
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline outline-orange-400">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-orange-300 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center flex justify-center">Gold</h2>
                    <img src={gold} alt="" />
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline outline-orange-400">Book Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TrainerBook;
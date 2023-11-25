import './feactured.css'
const FeacturedSection = () => {
    return (
        <div className="">
            <div>
                <h2 className='text-center text-primary text-2xl font-semibold mt-24'>KEY FEATURED</h2>
                <hr />

            </div>

            <div className="mt-10   grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className=" card   card-compact w-96 bg-base-100 shadow-xl  ">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Body Building</h2>
                        <p>The largest selection fitness articles exercises workouts, supplements, & community to help you reach your goals!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className=" card  card-compact w-96 bg-base-100 shadow-xl  ">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Musculation</h2>
                        <p>The largest selection fitness articles exercises workouts, supplements, & community to help you reach your goals!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className=" card  card-compact w-96 bg-base-100 shadow-xl  ">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fitness Runing</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className=" card   card-compact w-96 bg-base-100 shadow-xl  ">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Musculation</h2>
                        <p>The largest selection fitness articles exercises
                            workouts, supplements, & community to help you reach your goals!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className=" card   card-compact w-96 bg-base-100 shadow-xl  ">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Weight Lifting</h2>
                        <p>The largest selection fitness articles exercises workouts, supplements, & community to help you reach your goals!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className=" card  card-compact w-96 bg-base-100 shadow-xl  ">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Classic Yoga</h2>
                        <p>The largest selection fitness articles exercises workouts, supplements, & community to help you reach your goals!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeacturedSection;
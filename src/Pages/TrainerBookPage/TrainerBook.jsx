

const TrainerBook = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-5">
            <div className="card w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Bronz</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Silver</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Gold</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerBook;
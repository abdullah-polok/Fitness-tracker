import { useLoaderData } from "react-router-dom";

const ClassDetails = () => {
    const { name, title, price, description, image } = useLoaderData();
    console.log(name)
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <p className="py-6">{description}</p>
                    <p>${price}</p>
                    <button className="btn btn-primary mt-3">Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;
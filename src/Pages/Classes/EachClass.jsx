import { Link } from "react-router-dom";

const EachClass = ({ classy }) => {
    const { _id, name, title, price, description, image } = classy
    return (
        <div>
            <div className="card w-80 bg-primary text-primary-content">
                <Link to={`/classdetails/${_id}`}>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                    </div>
                </Link>
                <div className="card-actions justify-center p-4">
                    <Link to={'/trainer'}><button className="btn">Join Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default EachClass;
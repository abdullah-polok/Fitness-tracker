
import ban1 from '../../../assets/Images/Banner/premium_photo-1664301032470-33cc8c207f7f.jpg'
import ban2 from '../../../assets/Images/Banner/premium_photo-1669021454166-c68562603897 (1).jpg'
import ban3 from '../../../assets/Images/Banner/tikkho-maciel-2-_WkjmC8x4-unsplash.jpg'
import './styles.css'
import { IoAccessibility, IoBicycle, IoFitnessOutline, IoBandage } from "react-icons/io5";
import { Link } from "react-router-dom"
const Banner = () => {

    return (
        <div className="carousel w-full">
            <div id="slide1" className="container carousel-item relative w-full">
                <img src={ban1} className="image rounded-md w-full" />
                <div className="overlay absolute inset-0 bottom-10 flex-col  justify-center items-center">
                    <h2 className='lg:text-4xl font-bold uppercase'>Punctuality</h2>
                    <p className='lg:text-xl '>The only bad workout is the one that didnt happen</p>
                    <div className='flex gap-5 items-center mt-5'>
                        <button className='btn btn-primary lg:btn-lg text-xl font-bold uppercase'>Become a trainer</button>
                        <button className='btn btn-primary lg:btn-lg text-xl font-bold uppercase'>Become a user</button>
                    </div>
                    <div className='flex justify-between gap-x-5 mt-5 lg:text-6xl'>
                        <IoAccessibility />
                        <IoBicycle />
                        <IoFitnessOutline />
                        <IoBandage />
                    </div>
                    <div>
                        <Link className='btn btn-md btn-outline btn-primary mt-60' to={'/classes'}>Classes</Link>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="container carousel-item relative w-full">
                <img src={ban2} className="image rounded-md w-full" />
                <div className="overlay absolute top-1/2 flex-col text-center justify-center items-center">
                    <h2 className='text-lg lg:text-4xl font-bold uppercase'>aptitude</h2>
                    <p className='text-lg lg:text-xl '>Strive for progress, not perfection</p>
                    <div className='flex gap-5 items-center mt-5'>
                        <button className='btn btn-primary lg:btn-lg text-xl font-bold uppercase'>Become a trainer</button>
                        <button className='btn btn-primary lg:btn-lg text-xl font-bold uppercase'>Become a user</button>
                    </div>
                    <div className='flex justify-between gap-x-5 mt-5 lg:text-6xl'>
                        <IoAccessibility />
                        <IoBicycle />
                        <IoFitnessOutline />
                        <IoBandage />
                    </div>
                    <div>
                        <Link className='btn btn-md btn-outline btn-primary mt-60' to={'/classes'}>Classes</Link>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className=" container carousel-item relative w-full">
                <img src={ban3} className="image rounded-md w-full" />
                <div className="overlay absolute inset-0 bottom-10 flex-col justify-center items-center">
                    <h2 className='text-lg lg:text-4xl font-bold uppercase'>suitability</h2>
                    <p className=' text-lg lg:text-xl '>Your health is an investment, not an expense</p>
                    <div className='flex gap-5 items-center mt-5'>
                        <button className='btn btn-primary lg:btn-lg text-xl font-bold uppercase'>Become a trainer</button>
                        <button className='btn btn-primary lg:btn-lg text-xl font-bold uppercase'>Become a user</button>
                    </div>
                    <div className='flex justify-between gap-x-5 mt-5 lg:text-6xl'>
                        <IoAccessibility />
                        <IoBicycle />
                        <IoFitnessOutline />
                        <IoBandage />
                    </div>
                    <div>
                        <Link className='btn btn-md btn-outline btn-primary mt-60' to={'/classes'}>Classes</Link>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
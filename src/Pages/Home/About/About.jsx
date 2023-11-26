import aboutImage from '../../../assets/Images/About/ezgif.com-webp-to-jpg.jpg'

const About = () => {
    return (
        <div>
            <div className="text-center">
                <h2 className='text-center text-primary text-2xl font-bold mt-24 border-b-8 border-primary'>ABOUT US</h2>
            </div>
            <div className='grid gird-col-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-5'>
                <div className='text-left'>
                    <h2 className='text-3xl'>Our Story</h2>
                    <p className='mt-4'>Our Mission is based on the ideals. So, it’s important to understand it!
                        Body & Mind Wellness’s vision is to share and preserve the world cultural and artistic heritage along with facilitating respect for Mother Earth. All this is made possible with inner peace support and enhancement.
                        By creating our headquarters in Frederick, at the level of community, we serve as Work-Based Learning for youth, as well as offering educational activities, cultural events & workshops, and lectures on eco-friendly choices.</p>
                </div>
                <div>
                    <img className='w-full' src={aboutImage} alt="" />
                </div>
            </div>
            <div className='grid gird-col-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-5'>
                <div>
                    <h2 className='text-3xl'>Our Place</h2>
                    <p className='mt-4'>A place for a tea-house; a place where people can feed their passion for the arts, dance, theater; a place where age old wisdom and tradition are cherished; a place to unwind with inner peace meditation.</p>
                </div>
                <div>
                    <h2 className='text-3xl'>Our Goals</h2>
                    <p className='mt-4'>We grow and scale our nonprofit organization to provide a home base that can bring all of us together through the arenas of social, educational and recreational activities. We nurture a member driven organization that foster cross-cultural and cross-generational dialogue. We hope to inspire the future leaders of our community in the best way possible!</p>
                </div>
            </div>
        </div>
    );
};

export default About;
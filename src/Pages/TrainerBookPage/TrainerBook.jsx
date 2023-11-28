import bronz from '../../assets/images/types/bronz.png'
import silver from '../../assets/images/types/silver.png'
import gold from '../../assets/images/types/gold.png'

const TrainerBook = () => {
    return (
        <div className="grid grid-cols-1 mt-4 gap-5">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={bronz} className="max-w-sm rounded-lg shadow-2xl bg-orange-200" />
                    <div className=''>
                        <h2 className='text-primary text-xl'>Bronze Package:</h2>
                        <ol>
                            <li>1. Basic Discounts: Members receive standard discounts on purchases.</li>

                            <li>2. Standard Customer Support: Access to standard customer support services.</li>

                            <li>3. Points System: Earn points for each purchase within the loyalty program.</li>

                            <li>4. Limited Access: Access to general promotions and sales.</li>

                            <li>5. Limited Access: Standard Benefits: Basic benefits associated with the loyalty program.</li>
                        </ol>
                    </div>
                    <button className='btn btn-outline'>Join Now</button>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={silver} className="max-w-sm rounded-lg shadow-2xl bg-gray-200" />
                    <div className=''>
                        <h2 className='text-primary text-xl'>Silver Package:</h2>
                        <ol>
                            <li>1. Higher Discounts: Members enjoy increased discounts on purchases compared to the bronze package.
                            </li>

                            <li>2. Priority Customer Support: Priority access to customer support with faster response times.</li>

                            <li>3. Enhanced Points System: Earn more points per purchase than the bronze package.</li>

                            <li>4. Exclusive Sales: Access to exclusive sales events and promotions.</li>

                            <li>5. Advanced Benefits: Additional perks such as extended warranty or exclusive member-only content.</li>
                        </ol>
                    </div>
                    <button className='btn btn-outline'>Join Now</button>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={gold} className="max-w-sm rounded-lg shadow-2xl bg-orange-300" />
                    <div className=''>
                        <h2 className='text-primary text-xl'>Gold Package:</h2>
                        <ol>
                            <li>1. Maximum Discounts: The highest level of discounts on purchases.</li>

                            <li>2. Dedicated Customer Support: Dedicated customer support representatives for personalized assistance.</li>

                            <li>3. Premium Points System: Earn the most points per purchase, accelerating reward accumulation.</li>

                            <li>4. VIP Access: Exclusive access to pre-sales, limited-edition products, and VIP events.</li>

                            <li>5. Elite Benefits: Premium benefits, such as priority shipping, special gifts, and tailored experiences.</li>
                        </ol>
                    </div>
                    <button className='btn btn-outline'>Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default TrainerBook;
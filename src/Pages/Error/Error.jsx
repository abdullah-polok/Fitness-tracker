import { Link } from 'react-router-dom';
import err from '../../assets/images/404-status-code.png'

const Error = () => {
    return (
        <div>
            <div>
                <Link className='btn btn-primary p-4' to={'/'}>Back to Home</Link>
            </div>
            <img className='' src={err} alt="" />
        </div>
    );
};

export default Error;
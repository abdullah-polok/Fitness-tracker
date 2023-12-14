import React from 'react';

const Newsletter = () => {
    return (
        <div className='flex justify-center mt-24'>
            <form >
                <header className="footer-title text-primary font-bold">Newsletter</header>
                <fieldset className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Newsletter;
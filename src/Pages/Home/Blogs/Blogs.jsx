
const Blogs = () => {
    return (
        <div>
            <div className="text-center">
                <h2 className='text-center text-primary text-2xl font-bold mt-24 border-b-8 border-primary'>Blogs</h2>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">


                    Why We Created Fitness Hacks For Life

                </div>
                <div className="collapse-content">
                    <p> Fitness Hacks for Life was created to help those dealing with symptoms of post-traumatic stress disorder, such as anxiety, depression, hypersensitivity, and avoidance behaviors. While these responses stem from trauma and
                        pain, without help, they can spread throughout all the avenues of our lives. Our site was created to offer inspirational content and information so that a life of happiness, peace, and safety could be found.
                        Fitness Hacks offers a nominal charge for an online abuse dictionary for those who want to learn the signs of
                        narcissism or need tools to identify emotionally abusive relationships.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">


                    Why choose our therapist

                </div>
                <div className="collapse-content">
                    <p>  Our therapists play a crucial role in our lives, guiding us through the maze of emotions and providing us with the tools to navigate difficult situations. They are like a lighthouse, shining their light on our darkest moments and helping us find our way back to shore. Their expertise and compassionate nature create a safe space where we can openly express our thoughts and feelings without judgment.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
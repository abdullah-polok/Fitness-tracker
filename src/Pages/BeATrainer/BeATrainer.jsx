
const BeATrainer = () => {
    // const { trainer_name, profile_image, years_of_experience, social_icons, available_time } = trainer
    const handleTrainerForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const trainer_name = form.trainer_name.value
        const age = form.age.value
        const skills = form.skills.value
        const weektime = form.weektime.value
        const daytimefirst = form.daytimefirst.value
        const daytimeSecond = form.daytimeSecond.value
        const available_time = `${weektime}, ${daytimefirst}-${daytimeSecond}`
        const profile_image = form.profile_image.value;


        const trainInfo = { trainer_name, age, skills, available_time, profile_image }

        // console.log(trainInfo)
        fetch(`https://assignment-12-server-one-psi.vercel.app/trainers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(trainInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className="hero ">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-full">
                    <form onSubmit={handleTrainerForm} className="card-body text shadow-lg shadow-slate-400">
                        <div className="flex-row-reverse md:flex lg:flex">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" defaultValue={"polok.jak"} readOnly className="input w-full border-2" required />
                            </div>
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='trainer_name' placeholder="full name" className="input  " required />
                            </div>
                        </div>
                        <div className="flex-row-reverse md:flex lg:flex">
                            <div className="form-control bor">
                                <label className="label">
                                    <span className="label-text">Age</span>
                                </label>
                                <input type="number" name='age' placeholder="age" className="input  " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Skills</span>
                                </label>
                                <input type="text" name='skills' placeholder="Your Skills"
                                    className="input w-full border-2 " required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Year of Experience</span>
                            </label>
                            <input type="number" name='years_of_experience' placeholder="Your Experience"
                                className="input w-full border-2 " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available day in a week</span>
                            </label>
                            <input type="text" name='weektime' placeholder="Mon-Thus" className="input w-full border-2  " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available time in a day</span>
                            </label>
                            <div className="flex justify-between">
                                <div>
                                    <h3>From</h3>
                                    <input type="time" name='daytimefirst' placeholder="Available time in a day" className="input w-full border-2  " required />
                                </div>
                                <div>
                                    <h3>To</h3>
                                    <input type="time" name='daytimeSecond' placeholder="Available time in a day" className="input w-full border-2  " required />
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Image</span>
                            </label>
                            <input type="text" name='profile_image' placeholder="Your Photo Link"
                                className="input w-full border-2 " required />
                        </div>

                        <div className="form-control w-full mt-6">
                            <button className="btn btn-primary w-full">Apply Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BeATrainer;
const HeroInstructor = ({ teacher }) => {
    return (
        <div
            className="h-[350px] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${teacher?.coverPhoto})` }}
        >
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold">{teacher?.name}</h1>
                    <p className="mt-3">{teacher?.designation}</p>
                </div>
            </div>
        </div>
    );
};

export default HeroInstructor;
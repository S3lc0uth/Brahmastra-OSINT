export default function ChallengePage() {
    const challenges = [
        {
            title: "Bellingcat Online Investigation Challenge",
            description:
                "Test your open source investigation skills with real-world scenarios and puzzles from Bellingcat.",
            url: "https://challenge.bellingcat.com/",
            cta: "Play Bellingcat Challenge",
        },
        {
            title: "GeoSpy: Geolocation Game",
            description:
                "Guess the location from images and compete with others in this interactive geolocation challenge.",
            url: "https://play.geospy.ai/",
            cta: "Play GeoSpy",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center">
                Challenge
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                {challenges.map((challenge) => (
                    <div
                        key={challenge.url}
                        className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl border border-neutral-700 shadow-xl p-8 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                {challenge.title}
                            </h2>
                            <p className="text-neutral-300 mb-8 text-base">
                                {challenge.description}
                            </p>
                        </div>
                        <a
                            href={challenge.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
                        >
                            {challenge.cta}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

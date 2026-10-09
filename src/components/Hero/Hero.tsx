import { Link } from "react-router-dom"

function Hero() {
    return (
        <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">
            <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#1F6F5C]">
                    Explore Indonesia
                </p>

                <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                    Discover Indonesia beyond the ordinary.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-500">
                    Explore destinations, cultures, landscapes, and stories
                    from across the Indonesian archipelago.
                </p>

                <Link
                    to="/explore"
                    className="mt-8 inline-block rounded-full bg-[#1F6F5C] px-7 py-3.5 font-medium text-white transition hover:bg-[#185847]"
                >
                    Explore Destinations
                </Link>
            </div>

            <div className="h-[500px] overflow-hidden rounded-[28px] bg-neutral-200">
                <img
                    src="/images/image.png"
                    alt="Indonesian landscape"
                    className="h-full w-full object-cover"
                />
            </div>
        </section>
    )
}

export default Hero
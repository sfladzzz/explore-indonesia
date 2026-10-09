import { Link, useParams } from "react-router-dom"
import { destinations } from "../data/destination"
import DestinationMap from "../components/DestinationMap/DestinationMap"
import PageTransition from "../components/PageTransition/PageTransition"

function DestinationDetail() {
    const { slug } = useParams()

    const destination = destinations.find(
        (item) => item.slug === slug
    )

    if (!destination) {
        return (
            <main className="flex min-h-screen items-center justify-center px-6">
                <div className="text-center">
                    <p className="text-sm font-medium uppercase tracking-widest text-[#1F6F5C]">
                        404
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold">
                        Destination not found
                    </h1>

                    <p className="mt-4 text-neutral-500">
                        Destinasi yang kamu cari tidak ditemukan.
                    </p>

                    <Link
                        to="/explore"
                        className="mt-6 inline-block rounded-full bg-[#1f6f5c] px-5 py-3 text-sm font-medium text-white"
                    >
                        Back to Explore
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <PageTransition>
            <main className="min-h-screen px-6 pb-20 pt-10">
                <div className="mx-auto max-w-7xl">

                    {/* Back */}
                    <Link
                        to="/explore"
                        className="text-sm text-neutral-500 hover:text-[#1f6f5c]"
                    >
                        ← Back to Explore
                    </Link>

                    {/* Hero Image */}
                    <div className="mt-4 overflow-hidden rounded-3xl">
                        <img
                            src={destination.image}
                            alt={destination.name}
                            className="h-[300px] w-full object-cover md:h-[500px]"
                        />
                    </div>

                    {/* Destination Info */}
                    <div className="mt-8">
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-[#e8f3ef] px-4 py-2 text-sm text-[#1f6f5c]">
                                {destination.category}
                            </span>
                            <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-600">
                                {destination.region}
                            </span>
                        </div>

                        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                            {destination.name}
                        </h1>

                        <p className="mt-3 text-lg leading-8 text-neutral-500">
                            {destination.city}, {destination.province}
                        </p>

                        <p className="mt-8 max-w-3xl text-base leading-7 text-neutral-600">
                            {destination.description}
                        </p>
                    </div>

                    {/* Gallery */}
                    {destination.gallery && destination.gallery.length > 0 && (
                        <section className="mt-16">
                            <p className="text-sm font-medium uppercase tracking-widest text-[#1f6f5c]">
                                Gallery
                            </p>

                            <h2 className="mt-2 text-3xl font-semibold">
                                Explore {destination.name}
                            </h2>

                            <div className="mt-6 grid gap-4 md:grid-cols-3">
                                {destination.gallery.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${destination.name} ${index + 1}`}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-72 w-full rounded-2xl object-cover"
                                    />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Location */}
                    <section className="mt-16 border-t border-neutral-200 pt-10">
                        <p className="text-sm font-medium uppercase tracking-widest text-[#1f6f5c]">
                            Location
                        </p>

                        <h2 className="mt-2 text-3xl font-semibold">
                            Where is {destination.name}
                        </h2>

                        <div className="mt-6">
                            <DestinationMap destination={destination} />
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2 ">
                            <div className="rounded-2xl bg-neutral-100 p-5">
                                <p className="text-sm text-neutral-500">
                                    Latitude
                                </p>

                                <p className="mt-1 font-medium">
                                    {destination.latitude}
                                </p>
                            </div>

                            <div className="rounded-2xl bg-neutral-100 p-5">
                                <p className="text-sm text-neutral-500">
                                    Longitude
                                </p>

                                <p className="mt-1 font-medium">
                                    {destination.longitude}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </PageTransition>
    )
}

export default DestinationDetail
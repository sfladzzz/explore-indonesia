import { destinations } from "../../data/destination"
import DestinationCard from "../DestinationCard/DestinationCard"

function FeaturedDestinationCard() {
    return (
        <section className="bg-neutral-100 px-6 py-24">
            <div className="mx-auto max-w-7xl">

                <div className="mb-12">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1f6f5c]">
                        Discover
                    </p>
                    <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                        Destination World Exploring
                    </h2>
                    <p className="mt-4 max-w-xl text-neutral-500">
                        Discover places, landscapes, and experience from different parts of indonesia.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {destinations.map((destination) => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default FeaturedDestinationCard
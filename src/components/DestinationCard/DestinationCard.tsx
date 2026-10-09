import { Link } from "react-router-dom";
import type { Destination } from "../../types/destination";



type DestinationCardProps = {
    destination: Destination
}

function DestinationCard({ destination }: DestinationCardProps) {
    return (
        <Link
            to={`/destination/${destination.slug}`}
            className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
            <img
                src={destination.image}
                alt={destination.name}
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="p-5">
                <p className="text-sm text-neutral-500">
                    {destination.city}, {destination.province}
                </p>
                <h3 className="mt-1 text-xl font-semibold">
                    {destination.name}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-[#1f6f5c]">
                        {destination.category}
                    </span>

                    <span className="text-sm text-neutral-400">
                        view →
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default DestinationCard
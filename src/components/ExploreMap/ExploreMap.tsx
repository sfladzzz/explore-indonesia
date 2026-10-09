import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet"
import { Link } from "react-router-dom"
import type { Destination } from "../../types/destination"
import { defaultLeafletIcon } from "../../utils/leafletIcon"

type ExploreMapProps = {
    destinations: Destination[]
}

function ExploreMap({
    destinations,
}: ExploreMapProps) {
    return (
        <MapContainer
            center={[-2.5, 118]}
            zoom={5}
            scrollWheelZoom={true}
            className="h-[400px] w-full rounded-3xl md:h-[600px]"
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {destinations.map((destination) => (
                <Marker
                    key={destination.id}
                    icon={defaultLeafletIcon}
                    position={[
                        destination.latitude,
                        destination.longitude,
                    ]}
                >
                    <Popup>
                        <div className="w-48">
                            <img
                                src={destination.image}
                                alt={destination.name}
                                loading="lazy"
                                decoding="async"
                                className="h-24 w-full rounded-lg object-cover"
                            />

                            <h3 className="mt-2 font-semibold">
                                {destination.name}
                            </h3>

                            <p className="text-sm text-neutral-500">
                                {destination.city}, {destination.province}
                            </p>

                            <Link
                                to={`/destination/${destination.slug}`}
                                className="mt-2 inline-block text-sm font-medium text-[#1F6F5C]"
                            >
                                View Destination →
                            </Link>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

export default ExploreMap
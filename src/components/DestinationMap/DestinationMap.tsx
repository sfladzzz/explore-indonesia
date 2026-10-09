import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet"

import type { Destination } from "../../types/destination"
import { defaultLeafletIcon } from "../../utils/leafletIcon"

type DestinationMapProps = {
    destination: Destination
}

function DestinationMap({
    destination,
}: DestinationMapProps) {
    const position: [number, number] = [
        destination.latitude,
        destination.longitude,
    ]

    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-[450px] w-full rounded-3xl"
        >
            <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={defaultLeafletIcon}>
                <Popup>
                    <strong>
                        {destination.name}
                    </strong>
                    <br />
                    {destination.city}, {destination.province}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default DestinationMap
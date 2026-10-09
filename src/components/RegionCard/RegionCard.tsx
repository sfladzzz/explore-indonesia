import type { Region } from "../../data/region"

type RegionCardProps = {
    region: Region
}

function RegionCard({ region }: RegionCardProps) {
    return (
        <article className="group relative h-[320px] overflow-hidden rounded-[24px]">
            <img
                src={region.image}
                alt={region.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/50">

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-sm text-white/70">
                        Explore Region
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold">
                        {region.name}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
                        {region.description}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default RegionCard
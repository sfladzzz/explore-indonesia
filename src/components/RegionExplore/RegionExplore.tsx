import { region } from "../../data/region"
import RegionCard from "../RegionCard/RegionCard"

function RegionExplore() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-7xl">

                <div className="mb-12">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1f6f5c]">
                        Explore
                    </p>

                    <h2 className="mt-3 text-4xl font-semibold tracking-tight ">
                        Explore by region.
                    </h2>

                    <p className="mt-4 max-w-xl text-neutral-500">
                        Every region has its own landscapes, cultures, traditions, and stories.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {region.map((item) => (
                        <RegionCard
                            key={item.id}
                            region={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RegionExplore
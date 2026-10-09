import { useState } from "react"
import { destinations } from "../data/destination"
import DestinationCard from "../components/DestinationCard/DestinationCard"
import ExploreMap from "../components/ExploreMap/ExploreMap"
import PageTransition from "../components/PageTransition/PageTransition"

const regions = [
    "All",
    "Jawa",
    "Sumatra",
    "Kalimantan",
    "Sulawesi",
    "Bali & Nusa Tenggara",
    "Papua"
]

const categories = [
    "All",
    "Alam",
    "Adventure",
    "Budaya",
    "Kuliner",
    "Belanja",
    "Sejarah"
]

function Explore() {
    const [search, setSearch] = useState("")
    const [selectedRegion, setSelectedRegion] = useState("All")
    const [selectedCategory, setSelectedCategory] = useState("All")


    const filteredDestinations = destinations.filter((destination) => {
        const searchTerm = search.toLowerCase().trim()

        const matchesSearch = [
            destination.name,
            destination.city,
            destination.province,
        ].some((value) =>
            value.toLowerCase().includes(searchTerm)
        )


        const matchesRegion =
            selectedRegion === "All" ||
            destination.region === selectedRegion

        const matchesCategory =
            selectedCategory === "All" ||
            destination.category === selectedCategory

        return matchesSearch && matchesRegion && matchesCategory
    })

    const resetFilters = () => {
        setSearch("")
        setSelectedRegion("All")
        setSelectedCategory("All")
    }


    return (
        <PageTransition>
            <main className="min-h-screen px-6 py-15" >
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1f6f5c]">
                        Explore Indonesia
                    </p>

                    <h1 className="mt-3 text-5xl font-semibold tracking-tight">
                        Find Your Next Destination
                    </h1>

                    <p className="mt-4 max-w-xl text-neutral-500">
                        Explore destinations across Indonesia and find places that match your interests.
                    </p>

                    <input
                        type="text"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search destination..."
                        className="mt-10 w-full max-w-xl rounded-full border border-neutral-300 px-5 py-3 outline-none focus:border-[#1f6f5c]"
                    />

                    <div className="mt-8">
                        <p className="mb-3 text-sm font-medium">
                            Region
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {regions.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setSelectedRegion(item)}
                                    className={`rounded-full px-4 py-2 text-sm transition duration-200 hover:bg-[#1f6f5c] hover:text-white ${selectedRegion === item
                                        ? "bg-[#1f6f5c] text-white"
                                        : "bg-neutral-100 text-neutral-600"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="mb-3 text-sm font-medium">
                            Category
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {categories.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setSelectedCategory(item)}
                                    className={`rounded-full px-4 py-2 text-sm transition duration-200 hover:bg-[#1f6f5c] hover:text-white ${selectedCategory === item
                                        ? "bg-[#1f6f5c] text-white"
                                        : "bg-neutral-100 text-neutral-600"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm text-neutral-500" aria-live="polite" >
                            Menampilkan{" "}
                            <span className="semi-bold text-neutral-900">
                                {filteredDestinations.length}
                            </span>
                            dari {destinations.length} destinasi
                        </p>

                        <button
                            type="button"
                            onClick={resetFilters}
                            disabled={
                                search === "" &&
                                selectedRegion === "All" &&
                                selectedCategory === "All"
                            }
                            className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition hover:border-[#1f6f5c] hover:text-[#1f6f5c] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Reset filter
                        </button>
                    </div>

                    <div className="mt-12">
                        <ExploreMap destinations={filteredDestinations} />
                    </div>

                    {filteredDestinations.length > 0 ? (
                        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {filteredDestinations.map((destination) => (
                                <DestinationCard
                                    key={destination.id}
                                    destination={destination}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="mt-6 flex min-h-[300px] items-center justify-center rounded-3xl border border-dashed border-neutral-300">
                            <div className="text-center">
                                <p className="text-sm font-medium uppercase tracking-widest text-[#1f6f5c]">
                                    No destination found.
                                </p>

                                <h2 className="mt-3 text-2xl font-semibold">
                                    Tidak ada destinasi yang cocok
                                </h2>

                                <p className="mt-2 text-neutral-500">
                                    Coba ubah kata pencarian atau filter yang kamu pilih.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </PageTransition >
    )
}

export default Explore
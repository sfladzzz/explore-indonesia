import Hero from "../components/Hero/Hero"
import FeaturedDestinationCard from "../components/FeaturedDestinationCard/FeaturedDestinationCard"
import RegionExplore from "../components/RegionExplore/RegionExplore"
import PageTransition from "../components/PageTransition/PageTransition"

function Home() {
    return (
        <>
            <PageTransition>
                <main>
                    <Hero />
                    <FeaturedDestinationCard />
                    <RegionExplore />
                </main>
            </PageTransition>
        </>
    )
}

export default Home;
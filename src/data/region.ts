export type Region = {
    id: number
    name: string
    description: string
    image: string
}

export const region: Region[] = [
    {
        id: 1,
        name: "Sumatra",
        description: "Explore the landscapes and cultures of Sumatra.",
        image: "/images/region/sumatra.png",
    },
    {
        id: 2,
        name: "Jawa",
        description: "Discover cities, mountains, and cultural heritage.",
        image: "/images/region/java.png",
    },
    {
        id: 4,
        name: "Sulawesi",
        description: "Discover diverse cultures and coastal landscapes.",
        image: "/images/region/sulawesi.png",
    },
    {
        id: 5,
        name: "Bali & Nusa Tenggara",
        description: "Explore beaches, islands, and local traditions.",
        image: "/images/region/bali-nusa-tenggara.png",
    },
    {
        id: 6,
        name: "Papua",
        description: "Discover extraordinary landscapes and marine life.",
        image: "/images/region/papua.png",
    },
]
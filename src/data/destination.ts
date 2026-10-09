import type { Destination } from "../types/destination";

export const destinations: Destination[] = [
    {
        id: 1,
        name: "Kawah Putih",
        slug: "kawah-putih",
        province: "Jawa Barat",
        region: "Jawa",
        category: "Alam",
        city: "Bandung",
        description: "Destinasi wisata alam yang berada di kawasan Bandung.",
        image: "/images/kawah-putih.png",
        gallery: [
            "/images/kawah-putih.png",
            "/images/image.png",
        ],
        latitude: -7.166,
        longitude: 107.402
    },
    {
        id: 2,
        name: "Raja Ampat",
        slug: "raja-ampat",
        province: "Papua Barat Daya",
        region: "Papua",
        category: "Alam",
        city: "Raja Ampat",
        description:
            "Kepulauan dengan lanskap laut dan ekosistem bawah laut.",
        image: "/images/raja-ampat.png",
        gallery: [
            "/images/raja-ampat.png",
            "/images/image.png",
        ],
        latitude: -0.234,
        longitude: 130.516,
    },

    {
        id: 3,
        name: "Gunung Bromo",
        slug: "gunung-bromo",
        province: "Jawa Timur",
        region: "Jawa",
        category: "Adventure",
        city: "Probolinggo",
        description:
            "Kawasan pegunungan dengan lanskap vulkanik.",
        image: "/images/gunung-bromo.png",
        gallery: [
            "/images/gunung-bromo.png",
            "/images/image.png",
        ],
        latitude: -7.942,
        longitude: 112.953,
    }
]
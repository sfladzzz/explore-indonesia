import { Link } from "react-router-dom"
import PageTransition from "../components/PageTransition/PageTransition"

function NotFound() {
    return (
        <PageTransition>
            <main className="flex min-h-[calc(100vh-160px)] items-center justify-center px-6 py-20">
                <div className="text-center">
                    <p className="text-sm font-medium uppercase tracking-widest text-[#1F6F5C]">
                        404 Error
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                        Page Not Found
                    </h1>

                    <p className="mt-4 text-neutral-500">
                        Halaman yang kamu cari tidak dapat ditemukan atau sudah dipindahkan.
                    </p>

                    <div className="mt-6 flex justify-center gap-4">
                        <Link
                            to="/"
                            className="rounded-full bg-[#1F6F5C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#185847]"
                        >
                            Back to Home
                        </Link>
                        <Link
                            to="/explore"
                            className="rounded-full bg-neutral-100 px-6 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-200"
                        >
                            Explore Destinations
                        </Link>
                    </div>
                </div>
            </main>
        </PageTransition>
    )
}

export default NotFound

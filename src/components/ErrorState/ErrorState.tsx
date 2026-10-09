type ErrorStateProps = {
    message?: string
}

function ErrorState({
    message = "Terjadi kesalahan saat memuat data.",
}: ErrorStateProps) {
    return (
        <div className="flex min-h-[300px] items-center justify-center rounded-3xl border border-red-200 bg-red-50 px-6">
            <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-widest text-red-600">
                    Something went wrong
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-neutral-900">
                    Gagal memuat data
                </h2>

                <p className="mt-2 text-neutral-500">
                    {message}
                </p>

                <button
                    onClick={() => window.location.reload()}
                    className="mt-5 rounded-full bg-[#1f6f5c] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#185847]"
                >
                    Coba lagi
                </button>
            </div>
        </div>
    )
}

export default ErrorState
import SearchSection from "./SearchSection";

export default function Hero() {
    return (
        <section className="flex flex-col items-center text-white">
            <article>
                <h1 className="text-2xl font-bold">Descarga tus videos a MP3</h1>
                <p className="mt-4 text-center">Ingresa tu enlace abajo:</p>
            </article>

            <article>
                <SearchSection />
            </article>


        </section>
    )
}

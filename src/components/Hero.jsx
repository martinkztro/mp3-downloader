import SearchSection from "./SearchSection";

export default function Hero() {
    return (
        <section className="flex flex-col items-center mt-8 gap-4 text-white">
            <article>
                <h1 className="text-3xl md:text-4xl text-center text-[#368DF1] font-black">Convierte videos de <strong>Youtube</strong> a <strong>MP3</strong></h1>
            </article>

            <article>
                <SearchSection />
            </article>


        </section>
    )
}

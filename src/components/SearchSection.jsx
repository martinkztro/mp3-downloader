import ButtonLoading from "./ButtonLoading";

export default function SearchSection() {
    return (
        <div className="flex flex-col gap-5 mt-5">
            <input type="text" placeholder="Tu URL aquí..." className="rounded-full px-4 py-2 border text-black border-gray-300" />
            <button className="bg-[#f0c929] text-black py-2 rounded-md">Descargar MP3</button>
        </div>
    )
}
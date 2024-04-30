export default function SearchSection() {
    return (
        <div className="flex flex-col items-center gap-8 mt-6">
            <div className="flex flex-col gap-2">
                <p className="text-slate-300 md:text-xl text-center">Ingresa tu enlace aquí abajo:</p>
                <input type="text" placeholder="Pega tu URL aquí..." className="rounded-full px-6 w-26 md:w-[700px] py-2 bg-[#242427] border-[1px] text-slate-300 border-gray-500" /></div>
            <span>
                <button className="bg-[#006fee] text-white py-2 px-8 md:px-12 md:text-xl mx-auto rounded-md">Convertir a MP3</button>
            </span>
        </div>
    )
}
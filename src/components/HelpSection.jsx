

export default function HelpSection() {
    return (
        <div className="flex flex-col items-center gap-32 justify-center">
            <div id="ayuda">
                <h2 className="text-3xl lg:text-5xl mb-2 text-center font-black text-[#368DF1]">¿Cómo realizar mi descarga?</h2>
                <p className="text-md text-center text-slate-300">Después de haber convertido tu video, debes realizar lo siguiente:</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-28">
                <div>
                    <h3 className="lg:text-3xl text-2xl lg:mb-5 text-center font-black text-[#368DF1]">Paso 1</h3>
                    <p className="text-lg mb-3 text-center text-slate-300">Se abrirá otra página, haz clic en los <bold>3 puntitos de abajo</bold>:</p>
                    <img className="lg:" src="public/step_1.png" alt="Imagen del paso 1" />
                </div>

                <div>
                    <h3 className="lg:text-3xl text-2xl lg:mb-5 text-center font-black text-[#368DF1]">Paso 2</h3>
                    <p className="text-lg mb-3 text-center text-slate-300">Se mostrará un menú como este, haz clic en <bold>Descargar</bold>:</p>
                    <img className="lg:" src="public/step_2.png" alt="Imagen del paso 2" />
                </div>

                <div>
                    <h3 className="lg:text-3xl text-2xl lg:mb-5 text-center font-black text-[#368DF1]">Paso 3</h3>
                    <p className="text-lg mb-3 text-center text-slate-300">¡Listo! Tu video se descargará automáticamente:</p>
                    <img className="lg:" src="public/step_3.png" alt="Imagen del paso 3" />
                </div>
            </div>
        </div>
    );
}
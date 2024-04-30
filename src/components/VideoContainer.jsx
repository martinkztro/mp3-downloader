import ButtonLoading from './ButtonLoading';

export default function VideoContainer({ data, loading, error }) {

    if (loading) {
        return <ButtonLoading />;
    }

    if (error) {
        return <div>Algo malió sal:/</div>;
    }

    if (data) {
        return (
            <figure className="bg-slate-900 rounded-2xl w-[350px] md:w-[850px] h-full border-[1px] border-slate-600 flex md:flex-row flex-col gap-6 p-5">
                <img
                    className='aspect-video'
                    src={data.thumbnail_url}
                    alt="miniatura del video"
                    style={{
                        width: '300px',
                        height: '200px',
                        objectFit: 'cover'
                    }}
                />
                <div className="flex flex-col gap-8 md:gap-1 justify-between">
                    <div className="flex flex-col ">
                        <h1 className="md:text-2xl text-xl font-black">{data.title}</h1>
                        <h2 className="md:text-lg text-md text-slate-300 font-semibold">{data.author}</h2>
                        <h3 className='text-light text-sm md:text-md text-slate-200'>{new Date(data.publish_date).toLocaleDateString()}</h3>
                        <h4 className='text-light text-sm md:text-md text-slate-300'>{data.views} vistas</h4>
                    </div>

                    <div className="flex justify-center md:justify-around gap-5">
                        <a href={data.video_high} className="bg-[#f31260] text-sm md:text-md text-center md:py-2 py-2 px-6 md:px-12 rounded-lg font-semibold">Descarga MP4</a>
                        <a href={data.audio_high} className="bg-[#FF8B59] text-sm md:text-md text-center md:py-2 py-2 px-6 md:px-12 rounded-lg font-semibold">Descarga MP3</a>
                    </div>
                </div>
            </figure>
        );
    }

    return (<p className='text-slate-300'>Aqui deberia salir tu video cargado...</p>)
}
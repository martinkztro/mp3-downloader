import { useState, useEffect } from "react";

export default function SearchSection() {
    const [link, setLink] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setLink(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (link !== '') {
            setLoading(true);
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '3de2d39760mshf80c623ae3fe497p1b9a9ajsncf4b28e24e6b',
                    'X-RapidAPI-Host': 'youtube-audio-video-download.p.rapidapi.com'
                }
            };
            fetch(`https://youtube-audio-video-download.p.rapidapi.com/geturl?video_url=${encodeURIComponent(link)}`, options)
                .then(response => response.text())
                .then(result => {
                    setData(result);
                })
                .catch(error => {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    return (
        <div className="flex flex-col items-center gap-8 lg:gap-12 mt-6 lg:mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:gap-4">
                <p className="text-slate-300 md:text-xl lg:text-2xl text-center">Ingresa tu enlace aquí abajo:</p>
                <input onChange={handleInputChange} type="text" placeholder="Pega tu URL aquí..." className="rounded-full px-6 w-26 md:w-[700px] lg:w-[950px] py-2 lg:py-3 bg-[#242427] border-[1px] text-slate-300 border-gray-500" />
                <button type="submit" className="bg-[#006fee] text-white py-2 px-8 md:px-12 md:text-xl mx-auto rounded-md">Convertir a MP3</button>
            </form>
            
        </div>
    )
}
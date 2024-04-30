import Github from "./GithubLogo";

export default function Header() {
    return (
        <header className="h-16 flex md:h-20 justify-between items-center border-b-[1px] border-slate-500 p-5 md:p-8">
            <a href="#ayuda"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f9f9f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 17l0 .01" /><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" /></svg></a>
            <div className="text-white text-2xl md:text-4xl ml-4 font-semibold"> <span className="font-black text-[#006FEE]">YT</span>Converter</div>
            <nav>
                <a href="https://github.com/martinkztro/mp3-downloader">
                    <Github />
                </a>
            </nav>
        </header>
    )
}
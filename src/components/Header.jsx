import Github from "./GithubLogo";

export default function Header() {
    return (
        <header className="h-16 sticky top-0 flex justify-between items-center border-b-[1px] border-slate-500 p-5">
            <div></div>
            <div className="text-white text-2xl ml-4 font-semibold"> <span className="font-black text-[#006FEE]">YT</span>Converter</div>
            <nav>
                <a href="https://github.com/martinkztro/mp3-downloader">
                    <Github />
                </a>
            </nav>
        </header>
    )
}
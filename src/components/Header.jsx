import Github from "./GithubLogo";


export default function Header() {
    return (
        <header className="h-20 flex justify-between items-center p-14">
            <div className="text-white text-2xl font-bold">YT Downloader</div>
            <nav className="flex gap-5">
                <a href="">
                    <Github className="size-8" />
                </a>
            </nav>
        </header>
    )
}
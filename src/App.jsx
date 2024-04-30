import Header from "./components/Header"
import Hero from "./components/Hero"
import VideoContainer from "./components/VideoContainer"

function App() {

  return (
    <body className="h-screen">
      <div className="absolute top-0 -z-40 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header />

      <main className="flex flex-col justify-between h-[70vh] p-3">
        <Hero />

        <VideoContainer />
      </main>

    </body>
  )
}

export default App

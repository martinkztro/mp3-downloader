import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

  return (
    <body className="h-screen overflow-y-auto">
      <div className="absolute top-0 -z-40 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header />

      <main>
        <Hero />

      </main>

    </body>
  )
}

export default App

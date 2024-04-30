import Header from "./components/Header"
import HelpSection from "./components/HelpSection"
import Hero from "./components/Hero"

function App() {

  return (
    <body className="h-screen overflow-x-hidden scroll-smooth">
      <div className="absolute top-0 -z-40 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header />

      <main className="flex flex-col justify-between h-[70vh] p-4">
        <Hero />
      </main>

      <footer className="flex flex-col justify-between mt-80 h-[100vh] text-white p-4">
        <HelpSection />
      </footer>

    </body>
  )
}

export default App

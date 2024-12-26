import { getSleighs } from '../sanity/queries'
import { SleighCard } from './components/SleighCard'

const sleighs = await getSleighs()

function App() {
  return (
    <main className="w-full h-full p-4">
      <div className="flex items-center">
        <i className="fa-solid fa-sleigh text-6xl animate-bounce p-6"></i>
        <h1 className="text-4xl">Sleigh Manager</h1>
      </div>
      <p className="text-2xl">Here are your current sleighs:</p>
      <div className="flex flex-wrap gap-4 p-10">
        {sleighs.map((sleigh) => (
          <SleighCard sleigh={sleigh} />
        ))}
      </div>
    </main>
  )
}

export default App

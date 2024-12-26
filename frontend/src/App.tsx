import { getSleighs } from '../sanity/queries'
import { SleighCard } from './components/SleighCard'

const sleighs = await getSleighs()

function App() {
  return (
    <>
      <div className="flex items-center w-full bg-green-600">
        <i className="fa-solid fa-sleigh text-6xl text-red-500 p-6"></i>
        <h1 className="text-4xl">Sleigh Manager</h1>
      </div>
      <main className="w-full h-full p-4 flex flex-col items-center">
        <p className="text-2xl">Here are your current sleighs:</p>
        <div className="flex flex-wrap gap-4 p-10 justify-center">
          {sleighs.map((sleigh) => (
            <SleighCard sleigh={sleigh} key={sleigh._id} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App

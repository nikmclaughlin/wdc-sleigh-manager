import { getSleighs } from '../sanity/queries'
const sleighs = await getSleighs()
function App() {
  return (
    <>
      <i className="fa-brands fa-react text-6xl animate-spin"></i>
      <h1 className="text-4xl">Vite + React</h1>
      <p className="text-2xl">
        Click on the Vite and React logos to learn more
      </p>
      {sleighs.map((sleigh) => {
        return <p>{sleigh.name}</p>
      })}
    </>
  )
}

export default App

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <i className="fa-brands fa-react text-6xl animate-spin"></i>
      <h1 className="text-4xl">Vite + React</h1>
      <p className="text-2xl">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

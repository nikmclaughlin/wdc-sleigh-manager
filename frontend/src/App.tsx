import { useState } from 'react'
import { OrderCard } from './components/OrderCard'
import { SleighCard } from './components/SleighCard'
import { generateOrder } from './services/orders'
import { initSleighs } from './services/sleighs'

const firstOrder = await generateOrder()
const sleighs = await initSleighs()

function App() {
  const [orders, setOrders] = useState([firstOrder])
  return (
    <div className="h-screen">
      <div className="flex items-center w-full bg-green-600">
        <i className="fa-solid fa-sleigh text-6xl text-red-500 p-6"></i>
        <h1 className="text-5xl font-serif text-green-200">Sleigh Manager</h1>
      </div>
      <main className="w-full h-full p-4 flex flex-col items-center bg-green-300">
        <h2 className="text-3xl">Santa's Sleighs</h2>
        <div className="flex flex-wrap gap-4 p-10 justify-center">
          {sleighs.map((sleigh) => (
            <SleighCard sleigh={sleigh} key={sleigh._id} />
          ))}
        </div>
        <button
          className="p-4 bg-red-400 rounded hover:bg-red-500"
          onClick={async () => {
            setOrders([...orders, await generateOrder()])
            // console.info(orders)
          }}
        >
          Order up
        </button>
        <div className="flex p-4 gap-4 w-full justify-evenly border-2">
          {orders?.map((order, idx) => <OrderCard key={idx} order={order} />)}
        </div>
      </main>
    </div>
  )
}

export default App

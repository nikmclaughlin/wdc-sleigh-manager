import { useState } from 'react'
import { getRandomChild, getSleighs } from '../sanity/queries'
import { SleighCard } from './components/SleighCard'

const SLEIGH_COUNT = 3
const sleighdata = await getSleighs()
const selectionIndex = Math.round(
  Math.random() * (sleighdata.length - SLEIGH_COUNT)
)
const sleighs = sleighdata.slice(selectionIndex, selectionIndex + SLEIGH_COUNT)

const MAX_ORDER_SIZE = 3000
const MIN_ORDER_SIZE = 1000
const MAX_ORDER_DISTANCE = 10000
const MIN_ORDER_DISTANCE = 3000

const generateOrder = async () => {
  // Orders are generated with a size (1k - 3k lbs) and delivery distance (3k - 10k mi)
  const newSize = Math.round(
    Math.random() * (MAX_ORDER_SIZE - MIN_ORDER_SIZE) + MIN_ORDER_SIZE
  )
  const newDistance = Math.round(
    Math.random() * (MAX_ORDER_DISTANCE - MIN_ORDER_DISTANCE) +
      MIN_ORDER_DISTANCE
  )

  const orderChild = await getRandomChild()

  const newDestination = orderChild.address.split(', ')[1]

  const newOrder = {
    destination: newDestination,
    manifest: orderChild.wishList,
    size: newSize,
    distance: newDistance,
  }

  return newOrder
}

function App() {
  const firstOrder = generateOrder()
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
          onClick={() => {
            setOrders([...orders, generateOrder()])
            console.info(orders)
          }}
        >
          Order up
        </button>
        {orders?.map((_order, idx) => <p key={idx}>{'Order ' + idx}</p>)}
      </main>
    </div>
  )
}

export default App

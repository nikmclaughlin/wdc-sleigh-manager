import { useCallback, useEffect, useState } from 'react'
// import { Sleigh } from '../sanity/queries'
import { CountdownCard } from './components/CountdownCard'
import { InfoModal } from './components/InfoModal'
import { OrderCard } from './components/OrderCard'
import { SleighCard } from './components/SleighCard'
import { generateOrder, OrderType } from './services/orders'
import { initSleighs, SleighType } from './services/sleighs'

const firstOrder = await generateOrder()
const sleighs = await initSleighs()

const MAX_ORDER_COUNT = 4

function App() {
  const [orders, setOrders] = useState([firstOrder])
  const [nextOrderTime, setNextOrderTime] = useState(10)
  const [selectedOrderIds, setSelectedOrderIds] = useState<string[]>([])
  const [errorMessage, setErrorMessage] = useState('')
  const [isInfoShowing, setIsInfoShowing] = useState(true)

  useEffect(() => {
    const countdownInterval = setInterval(async () => {
      let remainingTime = nextOrderTime - 1

      if (remainingTime < 0) {
        if (orders.length < MAX_ORDER_COUNT) {
          setOrders([...orders, await generateOrder()])
        }
        remainingTime = 10
        clearInterval(countdownInterval)
      }

      setNextOrderTime(remainingTime)
    }, 1000)

    return () => clearInterval(countdownInterval)
  }, [nextOrderTime, orders])

  useEffect(() => {
    const errorMessageInterval = setInterval(async () => {
      if (errorMessage) {
        setErrorMessage('')
      }
      clearInterval(errorMessageInterval)
    }, 2000)

    return () => clearInterval(errorMessageInterval)
  }, [errorMessage])

  const toggleOrder = useCallback((orderId: string, selected: boolean) => {
    if (selected) {
      setSelectedOrderIds((selected) => [...selected, orderId])
    } else {
      setSelectedOrderIds((selected) =>
        selected.filter((listedId) => listedId !== orderId)
      )
    }
  }, [])

  const assignSleighOrders = (
    incomingOrders: OrderType[],
    sleigh: SleighType
  ) => {
    const totalAssignedWeight = incomingOrders.reduce(
      (acc, cur) => acc + cur.size,
      0
    )
    const totalAssignedDistance = incomingOrders.reduce(
      (acc, cur) => acc + cur.distance,
      0
    )
    if (totalAssignedWeight + sleigh.load > sleigh.capacity) {
      throw new Error("That sleigh can't carry that much!")
    } else {
      sleigh.load += totalAssignedWeight
      sleigh.deliveryDistance += totalAssignedDistance
    }
  }

  const selectSleigh = useCallback(
    (sleighId: string) => {
      const sleighToAssign = sleighs.find((sleigh) => sleigh._id === sleighId)
      if (selectedOrderIds.length > 0 && sleighToAssign) {
        // get the orders by id
        const ordersToAssign = orders.filter((order) =>
          selectedOrderIds.includes(order._id)
        )
        // load the sleigh
        try {
          assignSleighOrders(ordersToAssign, sleighToAssign)
        } catch (error) {
          if (error instanceof Error) {
            setErrorMessage(error.message)
          } else {
            console.log({ error })
          }
          return
        }

        // remove the orders
        setOrders((orders) =>
          orders.filter((order) => !selectedOrderIds.includes(order._id))
        )
        // clear selection
        setSelectedOrderIds([])
      }
    },
    [orders, selectedOrderIds]
  )

  return (
    <div className="h-screen">
      <InfoModal display={isInfoShowing} closing={setIsInfoShowing} />
      <div className="flex items-center justify-between w-full px-4 bg-green-600">
        <div className="flex items-center">
          <i className="fa-solid fa-sleigh text-6xl text-red-500 p-6"></i>
          <h1 className="text-5xl font-serif text-green-200">Sleigh Manager</h1>
        </div>
        <button className="px-4" onClick={() => setIsInfoShowing(true)}>
          <i className="fa-regular fa-circle-question text-2xl text-green-100"></i>
        </button>
      </div>
      <main className="w-full h-full p-4 flex flex-col items-center bg-green-300">
        <h2 className="text-3xl">Santa's Sleighs</h2>
        <div className="flex flex-wrap gap-4 p-10 justify-center">
          {sleighs.map((sleigh) => (
            <SleighCard
              sleigh={sleigh}
              onSelected={selectSleigh}
              key={sleigh._id}
            />
          ))}
        </div>
        {errorMessage ? (
          <p className="h-8 text-xl text-red-500 font-semibold animate-bounce">
            {errorMessage}
          </p>
        ) : (
          <div className="h-8"></div>
        )}
        <h2 className="text-2xl">Delivery Orders</h2>
        <div className="flex p-4 gap-4 w-full justify-center flex-wrap">
          {orders?.map((order) => (
            <OrderCard key={order._id} order={order} onSelected={toggleOrder} />
          ))}
          {orders.length < MAX_ORDER_COUNT && (
            <CountdownCard time={nextOrderTime} />
          )}
        </div>
      </main>
    </div>
  )
}

export default App

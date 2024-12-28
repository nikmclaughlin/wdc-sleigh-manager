import { getRandomChild } from '../../sanity/queries'

export type OrderType = {
  destination: string
  manifest: string[]
  size: number
  distance: number
}

const MAX_ORDER_SIZE = 3000
const MIN_ORDER_SIZE = 1000
const MAX_ORDER_DISTANCE = 10000
const MIN_ORDER_DISTANCE = 3000

export const generateOrder = async () => {
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

  const newOrder: OrderType = {
    destination: newDestination,
    manifest: orderChild.wishList,
    size: newSize,
    distance: newDistance,
  }

  return newOrder
}

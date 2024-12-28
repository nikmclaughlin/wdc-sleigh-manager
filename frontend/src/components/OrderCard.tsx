import { OrderType } from '../services/orders'

export const OrderCard = (props: { order: OrderType }) => {
  const order = props.order
  return (
    <>
      <div>{order.destination}</div>
      <div>{order.manifest}</div>
      <div>{order.size}</div>
      <div>{order.distance}</div>
    </>
  )
}

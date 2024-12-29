import { OrderType } from '../services/orders'

export const OrderCard = (props: { order: OrderType }) => {
  const order = props.order
  return (
    <div className="flex flex-col w-48 items-center p-4 bg-red-400/80 rounded-lg border-2 border-red-700 hover:scale-105">
      <div className="text-xl">
        Delivery to <br /> {order.destination}
      </div>
      <div className="flex justify-between w-full">
        <p>Size:</p>
        <p className="">{order.size + ' lbs' || 'n/a'}</p>
      </div>
      <div className="flex justify-between w-full">
        <p>Distance:</p>
        <p className="">{order.distance + ' mi' || 'n/a'}</p>
      </div>

      <p className="self-start text-lg font-semibold">Items</p>
      <ul>
        {order.manifest.map((item, idx) => (
          <li key={idx}>- {item}</li>
        ))}
      </ul>
    </div>
  )
}
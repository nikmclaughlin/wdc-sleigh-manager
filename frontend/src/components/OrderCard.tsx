import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { OrderType } from '../services/orders'

export const OrderCard = (props: {
  order: OrderType
  onSelected: (id: string, selected: boolean) => void
}) => {
  const order = props.order
  const onSelected = props.onSelected
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    onSelected(order._id, isSelected)
  }, [isSelected, onSelected, order._id])

  return (
    <div
      className={clsx(
        'flex flex-col w-48 items-center p-4 bg-red-400/80 rounded-lg border-2 border-red-700 hover:scale-105',
        isSelected && 'border-red-500/80 bg-red-500/80 scale-105'
      )}
      onClick={() => {
        setIsSelected(!isSelected)
      }}
    >
      <div
        className={clsx(
          'flex items-center gap-2 w-full justify-evenly',
          isSelected ? 'text-red-100' : 'text-red-950'
        )}
      >
        <i className="fa-solid fa-box text-3xl"></i>
        <p className="text-xl">
          Delivery to <br /> {order.destination}
        </p>
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

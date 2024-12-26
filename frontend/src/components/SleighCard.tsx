import { Sleigh } from '../../sanity/queries'

export const SleighCard = (props: { sleigh: Sleigh }) => {
  const sleigh = props.sleigh
  return (
    <div className="flex flex-col w-64 p-4 border-2 rounded-lg items-center hover:scale-105">
      <i className="fa-solid fa-sleigh text-4xl"></i>
      <div className="flex justify-between w-full">
        <p className="text-lg">{sleigh.name}</p>
        <p className="text-md text-gray-500">({sleigh.model})</p>
      </div>
      <div className="flex justify-between w-full">
        <p>Range:</p>
        <p>{sleigh.range || 'n/a'}</p>
      </div>
      <div className="flex justify-between w-full">
        <p>Capacity:</p>
        <p>{sleigh.capacity || 'n/a'}</p>
      </div>
      <div className="flex justify-between w-full">
        <p>Mileage:</p>
        <p>{sleigh.mileage || 'n/a'}</p>
      </div>
    </div>
  )
}

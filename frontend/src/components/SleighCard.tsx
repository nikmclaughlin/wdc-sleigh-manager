import { Sleigh } from '../../sanity/queries'

export const SleighCard = (props: { sleigh: Sleigh }) => {
  const sleigh = props.sleigh
  return (
    <div className="flex flex-col w-64 p-4 border-2 border-green-700 rounded-lg items-center hover:scale-105 bg-green-600 text-green-100">
      <i className="fa-solid fa-sleigh text-4xl"></i>
      <div className="flex justify-between w-full">
        <p className="text-lg">{sleigh.name}</p>
        <p className="text-green-100/80">({sleigh.model})</p>
      </div>
      <div className="flex justify-between w-full">
        <p>Speed:</p>
        <p className="">{sleigh.speed + ' mi/min' || 'n/a'}</p>
      </div>
      <div className="flex justify-between w-full">
        <p>Capacity:</p>
        <p className="">{sleigh.capacity + ' lbs' || 'n/a'}</p>
      </div>
    </div>
  )
}

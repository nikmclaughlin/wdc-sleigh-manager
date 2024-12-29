import { Sleigh } from '../../sanity/queries'

export const SleighCard = (props: { sleigh: Sleigh }) => {
  const sleigh = props.sleigh
  return (
    <div
      className="flex flex-col w-64 p-4 border-2 border-green-700 rounded-lg items-center hover:scale-105 bg-green-600 text-green-100"
      onClick={() => (sleigh.load += 500)}
    >
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
      {sleigh.load > 0 && (
        <>
          <div className="flex w-full items-center justify-between">
            <p>Load</p>
            <progress
              className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400"
              value={sleigh.load / sleigh.capacity}
            ></progress>
          </div>
          <div>
            {sleigh.load} / {sleigh.capacity}
          </div>
        </>
      )}
    </div>
  )
}

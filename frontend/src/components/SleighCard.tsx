import { useEffect, useState } from 'react'
import { SleighType } from '../services/sleighs'

export const SleighCard = (props: {
  sleigh: SleighType
  onSelected: (sleighId: string) => void
}) => {
  const sleigh = props.sleigh
  const onSelected = props.onSelected

  const stringSpeed = sleigh.speed.toString()
  const formattedSpeed =
    stringSpeed.slice(0, 2) + '.' + stringSpeed.slice(2, 3) + 'k'

  const [isDispatched, setIsDispatched] = useState(false)
  const [deliverySeconds, setDeliverySeconds] = useState(
    Math.round((sleigh.deliveryDistance / sleigh.speed) * 60)
  )

  useEffect(() => {
    if (isDispatched) {
      const sleighDispatchInterval = setInterval(() => {
        const remainingTime = deliverySeconds - 1

        if (remainingTime < 0) {
          setIsDispatched(false)
          sleigh.load = 0
          sleigh.deliveryDistance = 0
          setDeliverySeconds(() => 0)
          clearInterval(sleighDispatchInterval)
        }

        setDeliverySeconds(remainingTime)
      }, 1000)

      return () => clearInterval(sleighDispatchInterval)
    }
  }, [deliverySeconds, isDispatched, sleigh])

  useEffect(() => {
    if (!isDispatched) {
      setDeliverySeconds(
        Math.round((sleigh.deliveryDistance / sleigh.speed) * 60)
      )
    }
  }, [sleigh.load, sleigh.deliveryDistance, isDispatched, sleigh.speed])

  return (
    <div className="relative w-64">
      <div
        className="relative flex flex-col w-64 p-4 border-2 border-green-700 rounded-lg items-center bg-green-600 hover:bg-green-600/80 text-green-100"
        onClick={() => {
          if (!isDispatched) {
            onSelected(sleigh._id)
          }
        }}
      >
        <i className="fa-solid fa-sleigh text-4xl"></i>
        <div className="flex justify-between w-full">
          <p className="text-lg">{sleigh.name}</p>
          <p className="text-green-100/80">({sleigh.model})</p>
        </div>
        <div className="flex justify-between w-full">
          <p>Speed:</p>
          <p className="">{formattedSpeed + ' mi/min' || 'n/a'}</p>
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
            {isDispatched ? (
              <div className="h-6"></div>
            ) : (
              <div className="flex justify-between w-full">
                <p>Time to deliver:</p>
                <p className="">{deliverySeconds + ' sec' || 'n/a'}</p>
              </div>
            )}
            <button
              className="p-2 w-full bg-green-200 text-green-700 font-bold rounded-full"
              onClick={() => {
                if (!isDispatched) {
                  setIsDispatched(true)
                }
              }}
              disabled={isDispatched}
            >
              Dispatch
            </button>
          </>
        )}
      </div>
      {isDispatched && (
        <div className="absolute inset-0 flex justify-center items-center bg-slate-400/40 rounded-lg">
          <div className="text-2xl text-green-500 bg-green-200 p-2 rounded-lg">
            <p>Returns in {deliverySeconds}</p>
          </div>
        </div>
      )}
    </div>
  )
}

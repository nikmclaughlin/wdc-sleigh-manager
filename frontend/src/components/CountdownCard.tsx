export const CountdownCard = (props: { time: number }) => {
  const time = props.time
  return (
    <div className="flex flex-col flex-1 animate-pulse w-48 justify-center items-center p-4 bg-red-400/40 border-dotted border-4 rounded-lg text-balance text-center">
      <p>Next delivery order arrives in: </p>
      <p>{time} seconds</p>
    </div>
  )
}

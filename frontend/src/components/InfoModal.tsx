import clsx from 'clsx'

export const InfoModal = (props: {
  display: boolean
  closing: (value: boolean) => void
}) => {
  const isInfoShowing = props.display
  const setIsInfoShowing = props.closing
  return (
    <div
      className={clsx(
        'absolute top-4 right-4 text-xl p-4 rounded-lg bg-green-200 flex flex-col gap-2 w-2/3 z-10',
        isInfoShowing ? 'block' : 'hidden'
      )}
    >
      <button className="self-end" onClick={() => setIsInfoShowing(false)}>
        <i className="fa-solid fa-circle-xmark text-3xl"></i>
      </button>
      <h2 className="text-3xl font-semibold px-4">Welcome</h2>
      <p className="px-4">
        It's 2024 and the image you have of Christmas cheer being delivered by
        one old elf in a sleigh is a relic of the past. Santa is running the
        world's most advanced logistics operation (take that, Bezos) to deliver
        the magic for a new generation. <br />
        <br />
        Sleigh Manager puts you in the dispatch center for the North Pole's
        fleet of delivery sleighs as toy delivery orders come in from an endless
        torrent of letters to The Big Man. Assign orders to your sleighs as they
        come in and play your part in optimizing Christmas efficiency.
      </p>
      <h2 className="text-2xl font-semibold px-4">How to play</h2>
      <p className="px-4">
        Click on{' '}
        <span className="text-red-400 font-semibold">
          {' '}
          <i className="fa-solid fa-box" /> Orders
        </span>{' '}
        to select them as they come in and then click on a{' '}
        <span className="text-green-600 font-semibold">
          <i className="fa-solid fa-sleigh" /> Sleigh
        </span>{' '}
        to assign and load the order(s). Once a sleigh is loaded, you can click
        it's{' '}
        <span className="font-bold">
          <i className="fa-regular fa-paper-plane"></i> Dispatch
        </span>{' '}
        button to send it off on the delivery. <br /> <br />
        Each sleigh has it's own carrying capacity and flight speed - assign
        orders carefully to optimize delivery efficiency!
      </p>
    </div>
  )
}

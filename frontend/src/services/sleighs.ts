import { getSleighs } from '../../sanity/queries'

const SLEIGH_COUNT = 3

export const initSleighs = async () => {
  const sleighs = await getSleighs()
  const selectionIndex = Math.round(
    Math.random() * (sleighs.length - SLEIGH_COUNT)
  )
  return sleighs.slice(selectionIndex, selectionIndex + SLEIGH_COUNT)
}

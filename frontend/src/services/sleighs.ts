import { getSleighs } from '../../sanity/queries'

const SLEIGH_COUNT = 3

export const initSleighs = async () => {
  const allSleighs = (await getSleighs()).map((sleigh) => ({
    ...sleigh,
    load: 0,
  }))
  const selectionIndex = Math.round(
    Math.random() * (allSleighs.length - SLEIGH_COUNT)
  )

  const sleighs = allSleighs.slice(
    selectionIndex,
    selectionIndex + SLEIGH_COUNT
  )

  return sleighs
}

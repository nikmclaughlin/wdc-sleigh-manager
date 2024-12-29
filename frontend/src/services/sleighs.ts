import { getSleighs, SanitySleigh } from '../../sanity/queries'

export type SleighType = SanitySleigh & {
  load: number
  deliveryDistance: number
}

const SLEIGH_COUNT = 3

export const initSleighs = async () => {
  const allSleighs: SleighType[] = (await getSleighs()).map((sleigh) => ({
    ...sleigh,
    load: 0,
    deliveryDistance: 0,
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

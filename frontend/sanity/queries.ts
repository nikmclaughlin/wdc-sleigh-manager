import { Sanity } from './client'

// TODO: Put this in a Types file
export type SanitySleigh = {
  maintenanceHistory: []
  mileage: number
  model: string
  name: string
  range: number
  speed: number
  capacity: number
  _createdAt: string
  _id: string
  _rev: string
  _type: 'sleigh'
  _updatedAt: string
}

export type Child = {
  _createdAt: string
  _id: string
  _rev: string
  _type: 'child'
  _updatedAt: string
  address: string
  age: number
  name: string
  status: string
  wishList: string[]
}

export async function getSleighs() {
  const sleighs: SanitySleigh[] = await Sanity.fetch('*[_type == "sleigh"]')
  return sleighs
}

export async function getRandomChild() {
  const children: Child[] = await Sanity.fetch('*[_type== "child"]')
  const randomIndex = Math.round(Math.random() * children.length + 1)
  return children[randomIndex]
}

// export async function createPost(post: Post) {
//   const result = Sanity.create(post)
//   return result
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = Sanity.patch(_id).set({ title })
//   return result
// }

import { Sanity } from './client'

type Sleigh = {
  maintenanceHistory: []
  mileage: number
  model: string
  name: string
  _createdAt: string
  _id: string
  _rev: string
  _type: 'sleigh'
  _updatedAt: string
}

export async function getSleighs() {
  const sleighs: Sleigh[] = await Sanity.fetch('*[_type == "sleigh"]')
  return sleighs
}

// export async function createPost(post: Post) {
//   const result = Sanity.create(post)
//   return result
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = Sanity.patch(_id).set({ title })
//   return result
// }

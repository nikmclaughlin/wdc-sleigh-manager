import { createClient } from '@sanity/client'

export const Sanity = createClient({
  projectId: 'k66k4oiw',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-12-25', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Needed for certain operations like updating content or accessing previewDrafts perspective
})

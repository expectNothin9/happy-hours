import PocketBase from 'pocketbase'

const PB_HOST = process.env.NEXT_PUBLIC_PB_HOST
const pb = new PocketBase(PB_HOST)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(404).json({ message: 'not found' })
    return false
  }
  // create budgets records on PocketBase (with auth token)
  await pb.admins.authWithPassword(process.env.PB_USERNAME, process.env.PB_PASSWORD)
  const resp = await fetch(`${PB_HOST}/api/collections/budgets/records`, {
    method: 'POST',
    headers: {
      Authorization: pb.authStore.token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  })
  const parsedResp = await resp.json()
  res.status(resp.status).json(parsedResp)
}

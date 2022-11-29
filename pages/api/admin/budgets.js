import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(404).json({ message: 'not found' })
    return false
  }
  // create budgets records on PocketBase (with auth token)
  await pb.admins.authWithPassword(process.env.PB_USERNAME, process.env.PB_PASSWORD)
  const resp = await fetch('http://127.0.0.1:8090/api/collections/budgets/records', {
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

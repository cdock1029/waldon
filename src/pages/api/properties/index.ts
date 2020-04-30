import { NextApiRequest, NextApiResponse } from 'next'
import { propertyList, cache, verifyToken } from 'data'

export default async function properties(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const verified = await verifyToken(req)
  if (!verified) {
    return res.status(401).json({ error: 'Not authorized' })
  }

  const result = await propertyList()
  return cache(res).status(200).json(result)
}

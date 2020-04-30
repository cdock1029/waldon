import * as admin from 'firebase-admin'

const credential = JSON.parse(
  Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS, 'base64').toString()
)

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(credential),
    databaseURL: 'https://waldon-aea37.firebaseio.com',
  })
}

import type { NextApiRequest } from 'next'
export async function verifyToken(req: NextApiRequest): Promise<Boolean> {
  if (req.headers && req.headers.authorization) {
    const parts = req.headers.authorization.split(' ')
    if (parts.length === 2 && parts[0] === 'Bearer') {
      const token = parts[1]
      try {
        const result = await admin.auth().verifyIdToken(token)
        return true
      } catch (e) {
        console.log('*** ERROR *** ', e.message)
      }
    }
  }
  return false
}

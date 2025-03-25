import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'

const initFirebaseAdmin = () => {
  const app = getApps()

  if (!app.length) {
    initializeApp({
      credential: cert({
        projectId: process.env.KANBAN_BOARD_ID,
        clientEmail: process.env.KANBAN_BOARD_CLIENT_EMAIL,
        privateKey: process.env.KANBAN_BOARD_PRIVATE_KEY?.replace(/\\n/g, '\n')
      })
    })
  }

  return {
    auth: getAuth(),
    db: getFirestore()
  }
}

export const { auth, db } = initFirebaseAdmin()

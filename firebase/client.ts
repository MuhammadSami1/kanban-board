// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDAtL_kFFuINDj70vexu-ynYj3D8Se74RM',
  authDomain: 'kanban-board-12a37.firebaseapp.com',
  projectId: 'kanban-board-12a37',
  storageBucket: 'kanban-board-12a37.firebasestorage.app',
  messagingSenderId: '1079979332579',
  appId: '1:1079979332579:web:4babd326f934d9131ec6d6',
  measurementId: 'G-Q3Y3DSZRNP'
}

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)

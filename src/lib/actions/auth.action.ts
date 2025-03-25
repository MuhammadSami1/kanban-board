'use server'
import { db } from '@/firebase/admin'
import { tSignUp } from '@/src/types/authTypes'

export async function signUp(params: tSignUp) {
  const { uid, name, email } = params
  try {
    const userRecord = await db.collection('users').doc(uid).get()

    if (userRecord.exists) {
      return {
        success: false,
        message: 'User already exists. Please sign in instead.'
      }
    }

    await db.collection('users').doc(uid).set({
      name,
      email
    })

    return {
      success: true,
      message: 'User created successfully'
    }
  } catch (e: any) {
    console.error('Error creating a user', e)

    // if (e.code === 'auth/email-already-in-use') {
    //   return {
    //     success: false,
    //     message: 'Email already in use'
    //   }
    // }

    return {
      success: false,
      message: 'Failed to create an account'
    }
  }
}

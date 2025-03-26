'use server'
import { db, auth } from '@/firebase/admin'
import { tSignInRequest, tSignUp } from '@/src/types/authTypes'
import { cookies } from 'next/headers'

export async function signUp(params: tSignUp) {
  const { uid, name, email } = params
  if (!uid) {
    return {
      success: false,
      message: 'UID is required'
    }
  }
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

export async function signIn(params: tSignInRequest) {
  const { email, idToken } = params
  try {
    const userRecord = await auth.getUserByEmail(email)
    if (!userRecord) {
      return {
        success: false,
        message: 'User not found'
      }
    }

    await setSessionCookie(idToken)

    return {
      success: true,
      message: 'User signed in successfully'
    }
  } catch (e: any) {
    console.error('Error signing in', e)

    return {
      success: false,
      message: 'Failed to sign in'
    }
  }
}

export async function setSessionCookie(idToken: string) {
  const cookieStore = await cookies()

  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: 60 * 60 * 24 * 7 * 1000
  })

  cookieStore.set('session', sessionCookie, {
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/'
  })
}

export async function logOut() {
  const cookieStore = cookies()
  cookieStore.delete('session')

  return {
    success: true,
    message: 'User signed out successfully'
  }
}

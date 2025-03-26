'use client'
import Button from '@/components/ui/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignIn } from '@/src/lib/validation'
import Link from 'next/link'
import { tSignIn } from '@/src/types/authTypes'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/client'
import toast from 'react-hot-toast'
import { signIn } from '@/src/lib/actions/auth.action'
import { useState } from 'react'

const page = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<tSignIn>({
    resolver: yupResolver(SignIn)
  })

  const onSubmit = async (data: tSignIn) => {
    setIsLoading(true)
    const { email, password } = data
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const idToken = await userCredentials.user.getIdToken()
      if (!idToken) {
        toast.error('Sign in Failed. Please try again.')
        return
      }

      await signIn({
        email,
        idToken
      })

      toast.success('Signed in successfully.')
      router.push('/')
      reset()
    } catch (error: any) {
      toast.error(error.Message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-white">
      <div className="w-full max-w-md rounded-lg bg-foreground p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold">Sign In</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="mb-2 block text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-md bg-foreground p-3 text-white border-[1px] border-gray-600 focus:outline-none"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="mb-2 block text-sm" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-md p-3 text-white border-[1px] border-gray-600 bg-foreground focus:outline-none"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            variant="button"
            className="w-full rounded-3xl font-semibold"
            size="lg"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?
          <Link
            href="/signUp"
            className="ml-1 text-Primary-button hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default page

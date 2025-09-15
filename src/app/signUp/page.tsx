'use client'
import Button from '@/components/ui/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignUp } from '@/src/lib/validation'
import Link from 'next/link'
import { tSignUp } from '@/src/types/authTypes'
import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/client'
import { signUp } from '@/src/lib/actions/auth.action'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const page = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<tSignUp>({
    resolver: yupResolver(SignUp),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = async (data: tSignUp) => {
    setIsLoading(true)

    const { email, name, password } = data
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const result = await signUp({
      uid: userCredentials.user.uid,
      name: name!,
      email,
      password
    })
    if (!result?.success) {
      toast.error(result?.message || 'An error occurred')
      return
    }
    toast.success('Account created successfully.')
    router.push('/')
    reset()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-white">
      <div className="w-full max-w-md rounded-lg bg-foreground p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="mb-2 block text-sm" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              {...register('name', { required: true })}
              className="w-full rounded-md p-3 text-white border-[1px] border-gray-600 bg-foreground focus:outline-none"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
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
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?
          <Link
            href="/signIn"
            className="ml-1 text-Primary-button hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default page

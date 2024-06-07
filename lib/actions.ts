'use server'

import { formSchema } from '@/schemas/login'
import { AuthError } from 'next-auth'
import { signIn, signOut } from '@/auth'
import { z } from 'zod'

export async function login(data: z.infer<typeof formSchema>) {
  try {
    // call signIn from next-auth
    await signIn('credentials', data)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials'
        default:
          return 'Something went wrong'
      }
    }

    throw error
  }
}
export async function logout() {
  try {
    await signOut()
  } catch (error) {
    throw error
  }
}

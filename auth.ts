import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
async function getUser(username: string): Promise<any | undefined> {
  try {
    if (username === 'test') return { username: 'test', password: 'test' }
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw new Error('Failed to fetch user.')
  }
}
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            username: z.string().min(1),
            password: z.string().min(1),
          })
          .safeParse(credentials)
        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data
          const user = await getUser(username)
          if (!user) return null
          return user
        }
        return null
      },
    }),
  ],
})

'use server'

import { signIn } from '@/src/auth.config'

// ...

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    })

    return 'Success'
  } catch (error) {
    return 'Invalid credentials.'
  }
}

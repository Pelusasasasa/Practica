'use client'
import Link from 'next/link'
import { useActionState, useEffect } from 'react'
import { authenticate } from '@/src/actions/auth/login'
import { useFormStatus } from 'react-dom'

export const LoginForm = () => {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined)

  console.log(errorMessage)
  useEffect(() => {
    if (errorMessage === 'Invalid credentials.') {
    }
  }, [errorMessage])

  return (
    <form action={formAction} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input className="px-5 py-2 border bg-gray-200 rounded mb-5" type="email" name="email" />

      <label htmlFor="email">Contraseña</label>
      <input className="px-5 py-2 border bg-gray-200 rounded mb-5" type="password" name="password" />

      {errorMessage === 'Invalid credentials.' && (
        <div className="flex h-8 items-end space-x-1 mb-2" aria-live="polite" aria-atomic="true">
          <p className="text-red-500">Credenciales inválidas</p>
        </div>
      )}

      <LoginButton />

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} className="btn-primary">
      {pending ? 'Ingresando...' : 'Ingresar'}
    </button>
  )
}

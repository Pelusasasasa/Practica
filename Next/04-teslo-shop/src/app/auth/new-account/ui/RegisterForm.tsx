import Link from 'next/link'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormInputs = {
  name: string
  email: string
  password: string
}

export const registerForm = () => {
  const { register, handleSubmit } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = async data => {
    const { name, email, password } = data
    console.log({ name, email, password })
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Nombre Completo</label>
      <input className="px-5 py-2 border bg-gray-200 rounded mb-5" type="text" {...(register('name'), { required: true })} />

      <label htmlFor="email">Correo electrónico</label>
      <input className="px-5 py-2 border bg-gray-200 rounded mb-5" type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />

      <label htmlFor="password">Contraseña</label>
      <input className="px-5 py-2 border bg-gray-200 rounded mb-5" type="password" {...(register('password'), { required: true })} />

      <button className="btn-primary">Crear Cuenta</button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Ingresar
      </Link>
    </form>
  )
}

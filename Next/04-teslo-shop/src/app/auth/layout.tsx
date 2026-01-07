import { auth } from '@/src/auth.config'
import { redirect } from 'next/navigation'

export default async function ShopLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()

  if (session?.user) return redirect('/')

  return (
    <main className="min-h-screen flex justify-center">
      <div className="w-full sm:w-[350px] px-10">{children}</div>
    </main>
  )
}

import { auth } from '@/src/auth.config'
import { Title } from '@/src/components'
import { redirect } from 'next/navigation'

const ProfilePage = async () => {
  const session = await auth()

  if (!session?.user) return redirect('/')

  return (
    <div>
      <Title title="Perfil" />

      <pre>{JSON.stringify(session.user, null, 2)}</pre>
    </div>
  )
}

export default ProfilePage

import { useState } from 'react'

import AuthLayout from './auth/layout/AuthLayout'
import ChatLayout from './chat/layout/ChatLayout'
import ChatPage from './chat/pages/ChatPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<AuthLayout />*/}
      <ChatLayout>
        <ChatPage />
      </ChatLayout>
    </>
  )
}

export default App


import { useEffect, useState } from 'react'
import './App.css'

const url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';

function App() {

  const [number, setNumber] = useState<number>(0);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState();

  const [refreshToken, setRefreshToken] = useState(0)

  useEffect(() => {
    setIsloading(true);
    fetch(url)
    .then(resp => resp.json())
    .then(data => setNumber(data))
    .catch(error => setError(error))
    .finally(() => setIsloading(false))
  }, [refreshToken]);

  return (
    <>
      { isloading ? <h1>Cargando...</h1> : <h1>Numero aleatorio: {number}</h1>}

      <div>{error}</div>

      <div>....</div>

      <button disabled={isloading} onClick={() => setRefreshToken(refreshToken + 1)}>Nuevo numero</button>
    </>
  )
}

export default App

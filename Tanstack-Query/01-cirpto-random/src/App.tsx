import { useRandom } from './hooks/useRandom';
import './App.css'

export const url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';

function App() {
  const { randomQuery } = useRandom();
  
  return (
    <>
      { randomQuery.isFetching ? <h1>Cargando...</h1> : <h1>Numero aleatorio: {randomQuery.data}</h1>}

      {/* <RandomNumber /> */}

      <div>{JSON.stringify(randomQuery.error)}</div>

      <div>....</div>

      <button disabled={randomQuery.isFetching} onClick={() => randomQuery.refetch()}>Nuevo numero</button>
    </>
  )
}

export default App

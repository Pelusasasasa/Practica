import { useQuery } from '@tanstack/react-query';
import './App.css'

export const url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';


const getCryptoNumber = async():Promise<number> => {

  // throw 'No se pudo obtener el numero'

    const resp = await fetch(url)
    .then(resp => resp.json())

    return Number(resp)
};


function App() {

  const { isFetching, data:number, error, refetch } = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getCryptoNumber,
    staleTime: 1000 * 60,
    // refetchOnWindowFocus: false
  });

  return (
    <>
      { isFetching ? <h1>Cargando...</h1> : <h1>Numero aleatorio: {number}</h1>}

      {/* <RandomNumber /> */}

      <div>{JSON.stringify(error)}</div>

      <div>....</div>

      <button disabled={isFetching} onClick={() => refetch()}>Nuevo numero</button>
    </>
  )
}

export default App

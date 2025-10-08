import { useQuery } from '@tanstack/react-query';
import { url } from '../App';

const getCryptoNumber = async():Promise<number> => {
  
    const resp = await fetch(url)
    .then(resp => resp.json())

    return Number(resp)
};


const RandomNumber = () => {

      const { data } = useQuery({
        queryKey: ['randomNumber'],
        queryFn: getCryptoNumber,
        staleTime: 1000 * 60
    });
  return (
    <div>Random Number: { data }</div>
  )
}

export default RandomNumber
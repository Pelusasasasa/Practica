import { useQuery } from "@tanstack/react-query";
import { url } from "../App";

const getCryptoNumber = async():Promise<number> => {

  // throw 'No se pudo obtener el numero'

    const resp = await fetch(url)
    .then(resp => resp.json())

    return Number(resp)
};

export const useRandom = () => {
  const randomQuery = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getCryptoNumber,
    staleTime: 1000 * 60,
    // refetchOnWindowFocus: false
  });

  return {
    randomQuery
  }
};
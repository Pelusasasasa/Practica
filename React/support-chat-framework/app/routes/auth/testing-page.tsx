import { Link, NavLink } from "react-router";
import type { Route } from "./+types/testing-page";

export async function loader() {
    console.log('Hola Mundo desde el cliente')
    return { message: 'Hola Mundo desde el server'};
  }

  export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
    // call the server loader
    const serverData = await serverLoader();
    
    return { message: 'Hola Mundo desde el cliente', serverData};
  }
  
export default function MyRouteComponent({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <div>
      <h1 className="font-bold text-2xl">Testing Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>

      <NavLink to='/auth/testing-args' className={({isPending}) => 
        `transition-colors duration-200 ${isPending ? 'text-gray-400 cursor-not-allowed opacity-70' : 'text-blue-600 hover:text-blue-800 underline text-2xl'}`
      }>Testing args</NavLink>
    </div>



  );
}

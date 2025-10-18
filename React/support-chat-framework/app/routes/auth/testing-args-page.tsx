import { Link } from "react-router";
import type { Route } from "./+types/testing-args-page";
import { sleep } from "~/lib/sleep";

export function meta() {
  return [
    { title: "Support Chat" },
    {
      property: "og:title",
      content: "Support Chat",
    },
    {
      name: "description",
      content: "Support Chat for the app",
    },
  ];
}

export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}

export function links() {
  return [
    
  ];
}


export async function clientLoader({params}: Route.ClientLoaderArgs) {

  await sleep(1500)
  return {hola: 'Mundo'};
}

export function HydrateFallback() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80">
      <div className="flex flex-col items-center gap-4">
        <svg className="animate-spin h-14 w-14 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
        <span className="text-lg font-semibold text-gray-700">Cargando...</span>
      </div>
    </div>
  );
}




export default function TestingArgsPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const { id, name, age } = params;
  console.log({id, name, age})

  return (
    <div>
      <h1 className="font-bold text-2xl">Name: {name}</h1>
      <h4 className="font-bold text-2xl">Age: {age}</h4>
      <h5 className="font-bold text-2xl">Id: {id}</h5>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>


      <Link to='/auth/testing' className="text-blue-500 underline text-2xl">Testing</Link>
    </div>
  );
}
